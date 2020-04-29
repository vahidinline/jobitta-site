<style lang="scss" scoped>
section {
  .invoice {
    width: 600px;
    max-width: 100%;
    max-width: 90%;
  }
  .v-card {
    border-radius: 8px;
    padding: 40px 30px 24px;
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
      background-image: linear-gradient(265deg, #13d1f3, #35d6c1);
    }
  }
}
</style>
<template>
  <section ref="wrapper">
    <v-card class="invoice">
      <div class="text-center">
        <div class="icon-wrapper">
          <img src="~assets/img/ic_payment.png" alt />
        </div>
      </div>
      <div class="text-center subheading font-weight-bold mt-4">
        <p>
          Invoice for
          <span class="orange--text">1 Session</span>
        </p>
      </div>
      <ul>
        <template v-if="doctor">
          <li>
            <span>{{$t('invoice.price')}}</span>
            <span
              class="orange--text"
            >{{doctor.extra_field.price_per_minute * doctor.extra_field.sessionTime }} {{$t('currency')}}</span>
          </li>
          <li>
            <span>{{$t('invoice.sessionDate')}}</span>
            <span>{{reservation.reserve_time | persianDate('dddd, MMMM DD','en') }}</span>
          </li>
          <li>
            <span>{{$t('invoice.sessionTime')}}</span>
            <span>{{reservation.reserve_time | persianDate('HH:mm','en') }}</span>
          </li>
          <li>
            <span>{{$t('invoice.sessionDuration')}}</span>
            <span>{{doctor.extra_field.sessionTime }} {{$t('minute')}}</span>
          </li>
          <li>
            <span>{{$t('invoice.name')}}</span>
            <span>{{reservation.name}}</span>
          </li>
          <li>
            <span>{{$t('invoice.mobile')}}</span>
            <span>{{reservation.mobile }}</span>
          </li>
          <li>
            <span>{{$t('invoice.email')}}</span>
            <span>{{reservation.email}}</span>
          </li>
          <li>
            <span>{{$t('invoice.orderDate')}}</span>
            <span>{{now | persianDate('YYYY/MM/DD HH:mm') }}</span>
          </li>
        </template>
      </ul>
      <v-btn
        class="paypal-btn title"
        dark
        block
        large
        @click="submit"
      >Approve and Pay Through PayPal</v-btn>
    </v-card>
    <div class="notify-text">
      <img src="~assets/img/ic_info.png" alt />
      <div>
        <p>Your information is secured based on GDPR.</p>
      </div>
    </div>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import moment from 'moment-jalaali'
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import reservationModule from '@/store/reservation'
@Component({
  layout: 'insidepage'
})
export default class Invoice extends Vue {
  doctor = null
  get reservation() {
    return this.$store.state.reservation.info
  }
  get now() {
    return moment()
  }
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    loader.hide()
  }
  async submit() {
    let loader = this.$loader.show(this.$refs.wrapper)
    let data = { ...this.reservation }
    data.doctor_id = this.$route.params.id
    data.start = moment()
    try {
      let result = await this.$axios.$post('reservations', data)
      let Reservation = getModule(reservationModule, this.$store)
      Reservation.save_reservation_info({ track_id: result.track_id })
      this.$router.push(this.$route.fullPath.replace('invoice', 'finish'))
    } catch (error) {
      this.$toast.error().showSimple('خطایی رخ داده است')
    }
    loader.hide()
  }
}
</script>
