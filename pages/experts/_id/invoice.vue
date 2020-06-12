<style lang="scss" scoped>
section {
  .invoice {
    width: 1200px;
    max-width: 90%;
    position: relative;
    z-index: 0;
    &:before {
      @include media(md) {
        content: '';
        box-shadow: 15px 0 30px 0 rgba(0, 0, 0, 0.18);
        height: 100%;
        width: 50%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
      }
    }
  }
  .v-card {
    border-radius: 8px;
    padding: 20px 30px 24px;
    margin-top: 60px;
    @include media(xs-only) {
      margin-top: 40px;
      padding: 24px 20px;
    }
    .icon-wrapper {
      text-align: center;
      display: inline-flex;
      padding: 8px;
      position: relative;
    }
    ul {
      margin: 0;
      padding: 0;
      min-height: 200px;
      li {
        font-weight: bold;
        display: flex;
        font-size: 14px;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border: none;
        }
        span:last-child {
          color: #6c6c6c;
          font-weight: 600;
        }
        span:first-child {
          color: #000;
          font-weight: bold;
        }
      }
    }
    .paypal-btn {
      margin-top: 24px;
      border-radius: 8px;
      // background-image: linear-gradient(265deg, #13d1f3, #35d6c1);
    }
  }
  .invoice-wrapper,
  .strip-card-wrapper {
    padding: 10px 20px 40px;
    @include media(sm) {
      padding: 10px 60px 40px;
    }
  }
}
</style>
<template>
  <section ref="wrapper">
    <v-card class="invoice">
      <v-layout row wrap>
        <v-flex md6 sm12>
          <div class="invoice-wrapper">
            <div class="font-weight-bold mt-4 mb-9">
              <span class="headline font-weight-bold">
                <v-icon color="black" size="30" class="mr-2">lock</v-icon>Secure Checkout
              </span>
            </div>
            <ul>
              <template v-if="doctor.id">
                <li>
                  <span>{{$t('stepper.finish.specialistName')}}</span>
                  <span>{{doctor.title}} {{doctor.firstname}} {{doctor.lastname}}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.sessionDate')}}</span>
                  <span>{{reservation.reserve_time | persianDate('DD MMMM YYYY','en') }}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.sessionTime')}}</span>
                  <span>{{reservation.reserve_time | persianDate('HH:mm','en') }}</span>
                </li>
                <!-- <li>
                  <span>{{$t('stepper.invoice.sessionDuration')}}</span>
                  <span
                    v-if="$i18n.locale == 'en'"
                  >{{doctor.session_duration_hint || doctor.session_duration }} {{$t('minute')}}</span>
                  <span
                    v-if="$i18n.locale == 'fa'"
                  >{{doctor.session_duration_hint || doctor.session_duration | persianDigit}} {{$t('minute')}}</span>
                </li>-->

                <li>
                  <span>{{$t('stepper.invoice.price')}}</span>
                  <span class="orange--text">{{reservation.humanPrice }}</span>
                </li>
                <li v-if="reservation.discount">
                  <span>Discount</span>
                  <span
                    class="info--text"
                  >{{currency}} {{reservation.discount }} ({{reservation.copoun.off}}%)</span>
                </li>
                <li v-if="reservation.discount">
                  <span>Final Price</span>
                  <span class="success--text">{{currency}} {{reservation.newPrice }}</span>
                </li>

                <!-- <li>
                <span>{{$t('stepper.invoice.name')}}</span>
                <span>{{$auth.user.name}}</span>
              </li>
              <li>
                <span>{{$t('stepper.invoice.mobile')}}</span>
                <span>{{$auth.user.mobile }}</span>
              </li>
              <li>
                <span>{{$t('stepper.invoice.email')}}</span>
                <span>{{$auth.user.email}}</span>
              </li>
              <li>
                <span>{{$t('stepper.invoice.orderDate')}}</span>
                <span v-if="$i18n.locale == 'en'">{{now | persianDate('YYYY/MM/DD HH:mm') }}</span>
                <span
                  dir="ltr"
                  v-if="$i18n.locale == 'fa'"
                >{{now | persianDate('jYYYY/jMM/jDD HH:mm') | persianDigit}}</span>
                </li>-->
              </template>
            </ul>
            <client-only>
              <div class="d-flex">
                <v-flex xs8 pr-4>
                  <v-text-field
                    dense
                    v-model="copoun"
                    :disabled="Boolean(reservation.copoun)"
                    name="copoun"
                    label="Add a Discount Code"
                    @keypress.enter="checkCopoun"
                    hide-details
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex xs4 class="align-center d-flex">
                  <v-btn
                    v-if="reservation.copoun"
                    class="text-none"
                    color="error darken-2"
                    outlined
                    @click="removeCopoun"
                  >Remove</v-btn>
                  <v-btn
                    v-else
                    class="text-none"
                    color="secondary"
                    outlined
                    :loading="copounChecking"
                    @click="checkCopoun"
                  >Apply</v-btn>
                </v-flex>
              </div>
            </client-only>
            <!-- <div class="mt-2">
              <a @click="haveCopoun = true">Do You Have Copoun Code?</a>
            </div>-->
          </div>
        </v-flex>
        <v-flex md6 sm12>
          <div class="strip-card-wrapper d-flex flex-column fill-height" ref="wrapper">
            <div class="mt-4 mb-1">
              <div class="title mt-1">Pay with card</div>
              <div class="d-inline-flex flex-wrap">
                <div class="mr-1" v-for="(item, index) in brandIcons" :key="index">
                  <v-img width="44" height="28" :src="item" class="BrandIcon" />
                </div>
              </div>
            </div>
            <form id="payment-form" class="sr-payment-form">
              <div class="fieldset">
                <v-text-field name="name" label="Email"></v-text-field>
                <div id="stripe-card" class="input"></div>
                <v-text-field name="name" label="Name on card"></v-text-field>
              </div>
              <div
                v-if="errorMessage"
                class="error--text"
                id="card-errors"
                role="alert"
              >{{errorMessage}}</div>
            </form>
            <v-spacer></v-spacer>
            <v-btn
              class="mt-3 full-width"
              color="primary"
              :disabled="card && card._invalid"
              :loading="loading"
              @click.prevent="pay"
              outlined
            >pay {{currency}} {{ reservation.newPrice || reservation.price }}</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
declare const Stripe: any
import moment from 'moment-jalaali'
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import reservationModule from '@/store/reservation'

@Component({
  layout: 'stepper'
  // head: {
  //   script: [
  //     {
  //       src: 'https://js.stripe.com/v3/',
  //       body: true
  //     }
  //   ]
  // }
})
export default class Invoice extends Vue {
  doctor: any = {}
  description = ''
  data: any = {}
  card: any = {}
  stripe: any
  loading = false
  errorMessage = false
  source = null
  copoun = null
  copoun_append_icon = 'la-check'
  copounChecking = false
  haveCopoun = false
  brandIcons = [
    require('@/assets/img/visa.svg'),
    require('@/assets/img/mastercard.svg'),
    require('@/assets/img/amex.svg'),
    require('@/assets/img/Maestro.png'),
    require('@/assets/img/apple-pay.png'),
    require('@/assets/img/google-pay.png')
  ]
  Reservation = getModule(reservationModule, this.$store)
  currency: any = null
  get reservation() {
    let coupon = this.$store.state.reservation.info.copoun
    if (coupon) {
      this.copoun = coupon.code
      this.haveCopoun = true
    }
    return this.$store.state.reservation.info
  }
  get now() {
    return moment()
  }
  async mounted() {
    this.currency = this.reservation.currency.symbol
    if (!this.Reservation.info.reserve_time) {
      return this.$router.push(this.$route.fullPath.replace('invoice', 'time'))
    }
    if (!this.$auth.loggedIn) {
      return this.$router.push(this.$route.fullPath.replace('invoice', 'login'))
    }
    if (this.$auth.user && this.$auth.user.is_verified == 0) {
      return this.$router.push(
        this.$route.fullPath.replace('invoice', 'verify')
      )
    }
    let loader = this.$loader.show(this.$refs.wrapper)
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    if (!this.reservation.id) {
      let data = { ...this.reservation }
      let offset = new Date().getTimezoneOffset()
      data.reserve_time = moment(
        data.reserve_time + ' +00:00',
        'YYYY-MM-DD HH:mm Z'
      )
        .utcOffset(offset)
        .format('YYYY-MM-DD HH:mm')
      let result = await this.$service.reservation.create({
        data
      })
      this.Reservation.save_reservation_info({ ...result })
    }
    this.stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY)
    var elements = this.stripe.elements()
    this.card = elements.create('card', {
      // iconStyle: 'solid',
      style: {
        base: {
          iconColor: '#3f51b5',
          color: '#3f51b5',
          fontWeight: 400,
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',

          '::placeholder': {
            color: '#646c9a'
          },
          ':-webkit-autofill': {
            color: '#646c9a'
          }
        },
        invalid: {
          iconColor: '#E53935',
          color: '#E53935'
        }
      }
    })
    this.card.mount('#stripe-card')
    loader.hide()
  }

  async checkCopoun() {
    if (!this.copoun) {
      return this.$toast.error().showSimple('Discount Code is Required')
    }
    this.copounChecking = true
    try {
      let result = await this.$service.reservation.checkCopoun({
        code: this.copoun,
        reservation_id: this.reservation.id
      })
      this.$toast.success().showSimple('Discount code approved')
      this.data.clientSecret = result.clientSecret
      let { copoun, discount, newPrice } = result
      this.Reservation.save_reservation_info({ discount, newPrice, copoun })
    } catch (error) {
      let msg = error?.response?.data?.message || 'Discount code not found!'
      this.$toast.error().showSimple(msg)
    }
    this.copounChecking = false
  }
  async removeCopoun() {
    let accept = await this.$dialog.confirm({
      title: 'Remove Discount',
      message: 'Do you want to remove discount code?',
      cancel_txt: 'No',
      ok_txt: 'Yes, Remove it'
    })
    if (!accept) return
    let Reservation = getModule(reservationModule, this.$store)
    this.haveCopoun = false
    this.copoun = null
    Reservation.save_reservation_info({
      discount: null,
      newPrice: null,
      copoun: null
    })
  }
  async pay() {
    if (this.Reservation.info.payment_id) {
      return this.submit()
    }
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
    this.loading = false
    if (paymentIntent.status == 'succeeded') {
      this.Reservation.save_reservation_info({ payment_id: paymentIntent.id })
      return this.submit()
    } else {
      console.log(paymentIntent)
      alert('Payment Error')
    }
  }
  async submit() {
    debugger
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      await this.$service.reservation.approve({
        id: this.reservation.id,
        payment_id: this.reservation.payment_id
      })
      this.$router.push(this.$route.fullPath.replace('invoice', 'finish'))
    } catch (error) {
      let msg =
        error?.response?.data?.message ||
        'An Error Occured. Please Try Again Later'
      this.$toast.error().showSimple(msg)
    }
    loader.hide()
  }
}
</script>
