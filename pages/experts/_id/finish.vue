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
  padding: 40px 60px;
  @include media(xs-only) {
    padding: 30px 20px;
  }
  .icon-wrapper {
    text-align: center;
    border: 2px solid #ff9800;
    border-radius: 100%;
    display: inline-flex;
    padding: 8px;
    position: relative;
    .v-icon {
      font-size: 50px;
      @include media(xs-only) {
        font-size: 40px;
      }
    }
    &::after {
      content: '';
      top: -9%;
      left: -9%;
      border: 2px solid #000;
      position: absolute;
      border-radius: 100%;
      width: 118%;
      height: 118%;
    }
  }
}
</style>
<template>
  <section ref="wrapper">
    <v-card class="invoice">
      <v-img :src="require('@/assets/img/logo.png')"></v-img>
      <div class="text-center">
        <div class="icon-wrapper">
          <v-icon color="orange">la-check</v-icon>
        </div>
      </div>
      <div class="text-center subheading font-weight-bold mt-4">
        <h3>{{$t('stepper.finish.title')}}</h3>
        <p class="mt-3 font-weight-regular">
          {{$t('stepper.finish.subtitle')}}
          <!-- <span
            v-if="$auth.user"
            class="accent--text d-block font-weight-thin mt-3"
          >{{$auth.user.email}}</span>-->
        </p>
      </div>
      <ul v-if="reservation.currency">
        <li>
          <span>{{$t('stepper.finish.specialistName')}}</span>
          <span>{{doctor.title}} {{doctor.firstname}} {{doctor.lastname}}</span>
        </li>
        <li>
          <span>{{$t('stepper.finish.sessionTime')}}</span>
          <span v-if="$i18n.locale == 'en'">{{sessionTime}}</span>
          <span v-if="$i18n.locale == 'fa'">{{sessionTime | persianDigit}}</span>
        </li>
        <li>
          <span>Transaction ID</span>
          <span>{{reservation_info.track_id }}</span>
        </li>
        <li>
          <span>Transaction Date</span>
          <span>{{new Date() | persianDate('DD MMMM YYYY','en') }}</span>
        </li>
        <li>
          <span>{{$t('stepper.invoice.price')}}</span>
          <span class="orange--text">{{reservation.currency.symbol}} {{reservation.price }}</span>
        </li>
        <li v-if="reservation.discount">
          <span>Discount</span>
          <span
            class="info--text"
          >{{reservation.currency.symbol}} {{reservation.discount }} ({{reservation.copoun.off}}%)</span>
        </li>
        <li v-if="reservation.discount">
          <span>Final Price</span>
          <span class="success--text">{{reservation.currency.symbol}} {{reservation.newPrice }}</span>
        </li>
      </ul>

      <!-- <span class="caption">{{$t('stepper.finish.caption')}}</span> -->
      <!-- <p class="mt-5">
         {{$t('stepper.finish.zoom')}} 
         <span
          v-if="$auth.user"
          class="accent--text"
        >{{$auth.user.email}}</span>
      </p>-->
      <!-- <a
        class="secondary--text"
        href="https://google.com"
        target="_blank"
      >{{$t('stepper.finish.zoomLink')}}</a>-->
      <!-- <div class="mt-2">
        <a></a>
      </div>-->
      <v-btn
        class="title mt-4 text-none"
        color="primary"
        outlined
        block
        large
        @click="upload"
      >Upload</v-btn>
      <div
        class="caption mt-2"
      >Please use this space to upload any additional information you would like your Expert to see prior to your session</div>
    </v-card>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import moment from 'moment-jalaali'
import Upload from '@/components/Pages/Experts/Reservation/upload.vue'
@Component({
  layout: 'stepper'
})
export default class Finish extends Vue {
  reservation_info: any = {}
  doctor: any = {}
  get sessionTime() {
    if (this.$i18n.locale == 'en') {
      return `${moment(this.reservation_info.reserve_time)
        .locale('en')
        .format('DD MMMM YYYY')}, ${moment(this.reservation_info.reserve_time)
        .locale('en')
        .format('HH:mm')}`
    } else {
      return `${moment(this.reservation_info.reserve_time)
        .locale('fa')
        .format('Do jMMMM')} ${moment(this.reservation_info.reserve_time)
        .locale('fa')
        .format('HH:mm')} تا ${moment(this.reservation_info.reserve_time)
        .locale('fa')
        .add(this.reservation_info.sessionTime || 30, 'minute')
        .format('HH:mm')}`
    }
  }
  get reservation() {
    return this.$store.state.reservation.info
  }
  beforeCreate() {}

  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.reservation_info = { ...this.$store.state.reservation.info }
    if (!this.reservation_info.track_id) {
      return this.$router.push('/')
    }
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    loader.hide()
  }
  destroyed() {
    this.$store.commit('reservation/clear_reservation_info')
  }
  beforeRouteLeave() {
    this.$store.commit('reservation/clear_reservation_info')
  }
  async upload() {
    let result = await this.$dialog.show({
      component: Upload,
      scope: this.reservation_info
    })
    if (!result) {
      return
    }
    let loader = this.$loader.show(this.$refs.wrapper)
    this.reservation_info.description = result.description
    this.reservation_info.attachments = result.images
    try {
      await this.$service.reservation.update(this.reservation_info)
      this.$toast
        .success()
        .timeout(5000)
        .showSimple('Additional information submitted')
    } catch (error) {
      let msg =
        error?.response?.data?.message ||
        'An Error Occured. Please Try Again Later'
      this.$toast
        .error()
        .timeout(3000)
        .showSimple(msg)
    }
    loader.hide()
  }
}
</script>
