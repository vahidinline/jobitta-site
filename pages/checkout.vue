<style lang="scss" scoped>
</style>
<template>
  <div class="sr-root">
    <div class="sr-main" ref="wrapper">
      <form id="payment-form" class="sr-payment-form">
        <div class="sr-combo-inputs-row">
          <div class="sr-input sr-card-element" id="card-element"></div>
        </div>
        <div
          v-if="errorMessage"
          class="sr-field-error"
          id="card-errors"
          role="alert"
        >{{errorMessage}}</div>
        <v-btn
          class="mt-3"
          color="primary"
          :disabled="card && card._invalid"
          :loading="loading"
          @click.prevent="pay"
          block
          outlined
        >Pay</v-btn>
        <!-- <button id="submit">
          <div class="spinner hidden" id="spinner"></div>
          <span id="order-amount"></span>
        </button>-->
      </form>
      <div class="sr-result hidden">
        <p>
          Payment completed
          <br />
        </p>
        <pre>
            <code></code>
          </pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
declare const Stripe: any

@Component({
  layout: 'insidepage',
  head: {
    script: [
      {
        src: 'https://js.stripe.com/v3/',
        body: true
      }
    ]
  }
})
export default class component_name extends Vue {
  data: any = {}
  card: any = {}
  stripe: any
  loading = false
  errorMessage = false
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.data = await this.$axios.$post('pay')
    this.stripe = Stripe(this.data.publishableKey)
    var elements = this.stripe.elements()
    var style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }

    this.card = elements.create('card', { style: style })
    this.card.mount('#card-element')
    loader.hide()
  }
  async pay() {
    console.log(this.data)
    console.log(this.card)
    this.loading = true

    let result = await this.stripe.confirmCardPayment(this.data.clientSecret, {
      payment_method: {
        card: this.card
      }
    })
    if (result.error) {
      // Show error to your customer
      this.errorMessage = result.error.message
      this.loading = false
    } else {
      // The payment has been processed!
      this.orderComplete()
    }
  }
  async orderComplete() {
    let result = await this.stripe.retrievePaymentIntent(this.data.clientSecret)
    var paymentIntent = result.paymentIntent
    var paymentIntentJson = JSON.stringify(paymentIntent, null, 2)

    document.querySelector('.sr-payment-form').classList.add('hidden')
    document.querySelector('pre').textContent = paymentIntentJson
    document.querySelector('.sr-result').classList.remove('hidden')
    setTimeout(function() {
      document.querySelector('.sr-result').classList.add('expand')
    }, 200)
    this.loading = false
  }
}
</script>
