<style lang="scss" scoped>
section {
  .invoice {
    width: 1200px;
    max-width: 90%;
    position: relative;
    &:before {
      content: '';
      box-shadow: 15px 0 30px 0 rgba(0, 0, 0, 0.18);
      height: 100%;
      width: 50%;
      position: absolute;
      top: 0;
      right: 0;
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
        height: 50px;
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
  .invoice-wrapper {
    padding: 40px 60px;
  }
}
</style>
<template>
  <section ref="wrapper">
    <v-card class="invoice">
      <div class="text-center title font-weight-bold mt-4">
        <p>
          <v-icon color="black" class="mr-2">la-lock</v-icon>Secure Checkout
        </p>
      </div>
      <v-layout row wrap>
        <v-flex lg6>
          <div class="invoice-wrapper">
            <ul>
              <template v-if="doctor.id">
                <li>
                  <span>{{$t('stepper.finish.specialistName')}}</span>
                  <span>{{doctor.title}} {{doctor.firstname}} {{doctor.lastname}}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.sessionDate')}}</span>
                  <span
                    v-if="$i18n.locale == 'en'"
                  >{{reservation.reserve_time | persianDate('dddd, MMMM DD','en') }}</span>
                  <span
                    v-if="$i18n.locale == 'fa'"
                  >{{reservation.reserve_time | persianDate('dddd Do jMMMM','fa') | persianDigit }}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.sessionTime')}}</span>
                  <span
                    v-if="$i18n.locale == 'en'"
                  >{{reservation.reserve_time | persianDate('hh:mm A','en') }}</span>
                  <span
                    v-if="$i18n.locale == 'fa'"
                  >{{reservation.reserve_time | persianDate('hh:mm A','fa') | persianDigit}}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.sessionDuration')}}</span>
                  <span v-if="$i18n.locale == 'en'">{{doctor.session_duration }} {{$t('minute')}}</span>
                  <span
                    v-if="$i18n.locale == 'fa'"
                  >{{doctor.session_duration | persianDigit}} {{$t('minute')}}</span>
                </li>
                <li>
                  <span>{{$t('stepper.invoice.price')}}</span>
                  <span
                    class="orange--text"
                    v-if="$i18n.locale == 'en'"
                  >{{doctor.price }} {{$t('currency')}}</span>
                  <span
                    class="orange--text"
                    v-if="$i18n.locale == 'fa'"
                  >{{doctor.price | persianDigit}} {{$t('currency')}}</span>
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
          </div>
        </v-flex>
        <v-flex lg6>
          <div class="strip-card-wrapper" ref="wrapper">
            <form id="payment-form" class="sr-payment-form">
              <div class="fieldset">
                <v-text-field name="name" label="Email" id="id"></v-text-field>
                <div id="stripe-card" class="input"></div>
                <v-text-field name="name" label="Name on card" id="id"></v-text-field>
              </div>
              <div
                v-if="errorMessage"
                class="error--text"
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
            >pay {{doctor.price }} {{$t('currency')}}</v-btn>
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
export default class Invoice extends Vue {
  doctor: any = {}
  description = ''
  data: any = {}
  card: any = {}
  stripe: any
  loading = false
  errorMessage = false
  source = null
  get reservation() {
    return this.$store.state.reservation.info
  }
  get now() {
    return moment()
  }
  beforeCreate() {
    let Reservation = getModule(reservationModule, this.$store)
    if (!Reservation.info.reserve_time) {
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
  }
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    this.data = await this.$axios.$post('pay', {
      amount: this.doctor.price
    })
    this.stripe = Stripe(this.data.publishableKey)
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
    if (paymentIntent.status == 'succeeded') {
      return this.submit()
    } else {
      console.log(paymentIntent)
      alert('Payment Error')
    }
    this.loading = false
  }
  async submit() {
    let loader = this.$loader.show(this.$refs.wrapper)
    let data = { ...this.reservation }
    let offset = new Date().getTimezoneOffset()
    data.doctor_id = this.$route.params.id
    // data.description = this.description
    data.reserve_time = moment(
      data.reserve_time + ' +00:00',
      'YYYY-MM-DD HH:mm Z'
    )
      .utcOffset(offset)
      .format('YYYY-MM-DD HH:mm')
    try {
      let result = await this.$axios.$post('reservations', data)
      let Reservation = getModule(reservationModule, this.$store)
      Reservation.save_reservation_info({ track_id: result.track_id })
      this.$router.push(this.$route.fullPath.replace('invoice', 'finish'))
    } catch (error) {
      this.$toast.error().showSimple('Somthing Went Wrong.')
    }
    loader.hide()
  }
}
</script>
