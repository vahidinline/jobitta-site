<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  @include media(xs-only) {
    margin: 30px 0;
  }
  h3 {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
    color: var(--v-secondary-base);
  }
}
.invoice {
  width: 600px;
  margin-top: 40px;
  max-width: 90%;
}
ul {
  margin: 0;
  padding: 0;
  li {
    font-weight: bold;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border: none;
    }
    span:last-child {
      color: #6c6c6c;
      font-weight: normal;
    }
    span:first-child {
      color: #000;
      font-weight: bold;
    }
  }
}
.v-card {
  border-radius: 8px;

  @include media(xs-only) {
    padding: 30px 20px;
  }
  .icon-wrapper {
    text-align: center;
    border: 3px solid #ff9800;
    border-radius: 100%;
    display: inline-flex;
    padding: 8px;
    position: relative;
    .v-icon {
      font-size: 100px;
      @include media(xs-only) {
        font-size: 75px;
      }
    }
    &::after {
      content: '';
      top: -8%;
      left: -8%;
      border: 3px solid #000;
      position: absolute;
      border-radius: 100%;
      width: 116%;
      height: 116%;
    }
  }
}
</style>
<template>
  <section ref="wrapper">
    <v-card class="invoice">
      <div class="strip-card-wrapper" ref="wrapper">
        <form id="payment-form" class="sr-payment-form">
          <div class="fieldset">
            <div id="card-number" class="field empty"></div>
            <div id="card-expiry" class="field empty third-width"></div>
            <div id="card-cvc" class="field empty third-width"></div>
          </div>
          <div
            v-if="errorMessage"
            class="sr-field-error"
            id="card-errors"
            role="alert"
          >{{errorMessage}}</div>
        </form>
        <v-btn
          class="mt-3"
          color="primary"
          :disabled="card && card._invalid"
          :loading="loading"
          @click.prevent="pay"
          block
          outlined
        >pay</v-btn>
      </div>
    </v-card>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
declare const Stripe: any

import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import moment from 'moment-jalaali'
@Component({
  layout: 'stepper',
  head: {
    script: [
      {
        src: 'https://js.stripe.com/v3/',
        body: true
      }
    ]
  }
})
export default class Finish extends Vue {
  reservation_info: any = {}
  doctor: any = {}
  data: any = {}
  card: any = {}
  stripe: any
  loading = false
  errorMessage = false
  finish = false
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.data = await this.$axios.$post('pay', {
      amount: this.doctor.price
    })
    this.stripe = Stripe(this.data.publishableKey)
    var elements = this.stripe.elements()
    var elementStyles = {
      base: {
        fontSize: '16px',
        ':focus': {
          color: '#607D8B'
        },

        '::placeholder': {
          color: '#b0bec5'
        },

        ':focus::placeholder': {
          color: '#CFD7DF'
        }
      },
      invalid: {
        color: '#fff',
        ':focus': {
          color: '#FA755A'
        },
        '::placeholder': {
          color: '#FFCCA5'
        }
      }
    }

    var elementClasses = {
      focus: 'focus',
      empty: 'empty',
      invalid: 'invalid'
    }

    var cardNumber = elements.create('cardNumber', {
      style: elementStyles,
      classes: elementClasses
    })
    cardNumber.mount('#card-number')

    var cardExpiry = elements.create('cardExpiry', {
      style: elementStyles,
      classes: elementClasses
    })
    cardExpiry.mount('#card-expiry')

    var cardCvc = elements.create('cardCvc', {
      style: elementStyles,
      classes: elementClasses
    })
    cardCvc.mount('#card-cvc')
    loader.hide()
  }
  async pay() {
    let loader = this.$loader.show(this.$refs.wrapper)

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
    loader.hide()
  }
  async orderComplete() {
    let result = await this.stripe.retrievePaymentIntent(this.data.clientSecret)
    var paymentIntent = result.paymentIntent
    var paymentIntentJson = JSON.stringify(paymentIntent, null, 2)

    document.querySelector('.sr-payment-form')?.classList.add('hidden')
    let pre = document.querySelector('pre')
    if (pre) {
      pre.textContent = paymentIntentJson
    }
    document.querySelector('.sr-result')?.classList.remove('hidden')
    setTimeout(function() {
      document.querySelector('.sr-result')?.classList.add('expand')
    }, 200)
    this.finish = true
    this.loading = false
  }
}
</script>
