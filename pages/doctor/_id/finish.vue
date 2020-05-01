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
    <!-- <div class="logo-wrapper">
      <img src="~assets/img/logo.png" alt />
      <h3>رسا - رسانه سلامت ایرانیان</h3>
    </div>-->
    <v-card class="invoice">
      <div class="text-center">
        <div class="icon-wrapper">
          <v-icon color="orange">la-check</v-icon>
        </div>
      </div>
      <div class="text-center subheading font-weight-bold mt-4">
        <h3>Successful Request</h3>
        <p class="mt-3 font-weight-regular">
          Your request verification was sent to your email at
          <span
            class="accent--text d-block font-weight-thin mt-3"
          >{{reservation_info.email}}</span>
        </p>
        <!-- <p class="secondary--text">
          کد پیگیری:
          <span>{{reservation_info.track_id}}</span>
        </p>-->
      </div>
      <ul>
        <li>
          <span>Specialist Name</span>
          <span>{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</span>
        </li>
        <li>
          <span>Session Time</span>
          <span>{{sessionTime}}</span>
        </li>
      </ul>
      <span class="caption">Please be online 15 minutes before the session</span>
      <p class="mt-5">
        Your video session will happen through ZOOM application. Please login/signup with
        <span
          class="accent--text"
        >{{reservation_info.email}}</span>
      </p>
      <a
        class="secondary--text"
        href="https://google.com"
        target="_blank"
      >You can install the ZOOM application here</a>
      <v-btn class="title mt-4 text-none" color="primary" outlined block large to="/">Back To Home</v-btn>
      <!-- <div class="mt-4 body-1">
        <div class="font-weight-medium mb-1">
          <span>لطفا اپلیکیشن ZOOM را ننصل کنید.</span>
          <a href>نصب اپلیکیشن</a>
        </div>
        <p>تماس تصویری شما از طریق این اپلیکیشن انجام خواهد شد.</p>
      </div>
      <div class="mt-4 body-1">
        <p
          class="orange--text"
        >طی ۲ ساعت آینده، پشتیبانی ما برای هماهنگی بیشتر به شماره شما در واتس‌اپ (۰۹۱۲۱۴۵۷۵۸۶) پیام می‌دهد.</p>
      </div>
      <div class="mt-2 body-1">
        <p>
          اگر سوالی داشتید یا مشکلی برایتان پیش آمد، به پشتیبانی ما به شماره
          <span
            dir="ltr"
          >+۹۸۲۳۴۵۸۴۷۲</span> پیام دهید.
        </p>
      </div>-->
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
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import moment from 'moment'
@Component({
  layout: 'insidepage'
})
export default class Finish extends Vue {
  reservation_info: any = {}
  doctor: any = {}
  get sessionTime() {
    return `${moment(this.reservation_info.reserve_time)
      .locale('en')
      .format('MMMM Do')}, from ${moment(this.reservation_info.reserve_time)
      .locale('en')
      .format('hh:mmA')} to ${moment(this.reservation_info.reserve_time)
      .locale('en')
      .add(this.reservation_info.sessionTime || 30, 'minute')
      .format('hh:mmA')}`
  }
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrapper)
    this.reservation_info = { ...this.$store.state.reservation.info }
    // if (!this.reservation_info.track_id) {
    //   return this.$router.push('/')
    // }
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    loader.hide()
    this.$store.commit('reservation/clear_reservation_info')
  }
}
</script>
