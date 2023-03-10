<style lang="scss" scoped>
section {
  padding-top: 40px;
  > .v-card {
    border-radius: 8px;
    padding: 40px 60px;
    @include media(xs-only) {
      padding: 30px 20px;
    }
  }
}
.days {
  width: 90px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 13px;
  color: #000;
  font-weight: 500;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  div + div {
    margin-top: 8px;
  }
  &.active {
    // font-weight: bold;
    background: #e7f8f6;
  }
}
.v-card--link:focus:before {
  opacity: 0;
}
.time-wrapper {
  overflow-x: auto;
}
.time {
  width: 80px;
  height: 192px;
  display: flex;
  flex: 0 0 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 13px;
  color: #000;
  font-weight: 500;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    background: #e7f8f6;
  }
  span {
    color: #000;
    &.icon {
      margin-bottom: 20px;
      svg {
        width: 24px;
        height: auto;
      }
    }
    &.to {
      color: #6c6c6c;
      margin: 6px 0;
    }
  }
}
.invoice {
  width: 900px;
  max-width: 90%;
}

.paypal-btn {
  margin-top: 24px;
  border-radius: 8px;
  background-image: linear-gradient(265deg, #13d1f3, #35d6c1);
}
.v-item-group {
  display: flex;
  flex-wrap: wrap;
  box-shadow: none;
  .v-btn {
    margin: 8px;
    border-right: 1px solid currentColor;
    opacity: 0.8;
  }
}
</style>
<template>
  <section>
    <v-card class="invoice">
      <div class="text-center">
        <div class="icon-wrapper">
          <img src="~assets/img/ic_select_date.png" />
        </div>
      </div>
      <div class="text-center subheading font-weight-bold mt-4">
        <p>To schedule your session, please Select on of following time slots.</p>
      </div>
      <div class="mt-4 body-1">
        <div class="d-flex flex-wrap justify-center">
          <v-card
            :ripple="false"
            :raised="false"
            @click="selected_day = day;selected_time=null"
            :class="{active:selected_day==day}"
            class="days"
            v-for="day in days"
            :key="day"
          >
            <div>{{day | persianDate('dddd','en')}}</div>
            <div>{{day | persianDate('MMMM Do','en')}}</div>
            <!-- <h3>{{day | date('dd') }} </h3> -->
            <!-- <v-divider class="my-2"></v-divider> -->
            <!-- <v-btn-toggle v-model="reservation.reserve_time" @change="onChange">
            <v-btn
              :disabled="item.reserved"
              outlined
              small
              :color="is_selected(day,item)?'blue darken-1':''"
              v-for="(item, index) in times"
              :key="index"
              :value="`${day} ${item.start}`"
            >{{item.start}} - {{item.end}}</v-btn>
            </v-btn-toggle>-->
          </v-card>
        </div>
        <div class="d-flex time-wrapper">
          <div class="d-flex px-4">
            <v-card
              :disabled="item.reserved"
              :ripple="false"
              :raised="false"
              @click="selected_time = item.start"
              :class="{active:selected_time==item.start}"
              class="time"
              v-for="(item, index) in times"
              :key="index"
            >
              <span class="icon">
                <component :is="item.start < '16:00'?'Sun':'Moon'"></component>
              </span>
              <span>{{item.start}}</span>
              <span class="to">to</span>
              <span>{{item.end}}</span>
            </v-card>
          </div>
        </div>
        <v-btn
          :disabled="!(selected_time && selected_day)"
          class="paypal-btn text-none title"
          @click="submit"
          dark
          block
          large
        >Continue</v-btn>
        <div
          v-if="!(selected_time && selected_day)"
          class="error--text text-center mt-3"
        >please select one time</div>
      </div>
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
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'
import Sun from '~/assets/svg/sun.svg?inline'
import Moon from '~/assets/svg/moon.svg?inline'
import moment from 'moment-jalaali'
@Component({
  layout: 'insidepage',
  components: {
    Sun,
    Moon
  }
})
export default class TimeSelect extends Vue {
  reservation: any = {}
  selected_day: string | null = null
  selected_time: string | null = null
  days: any[] = []
  data: any = {}
  get times() {
    return this.selected_day && this.data[this.selected_day]
  }
  async mounted() {
    this.data = await this.$axios.$get(
      `doctors/${this.$route.params.id}/timeTable`
    )
    this.days = Object.keys(this.data)
      .map(item => moment(item))
      .sort((a: any, b: any) => {
        return a - b
      })
      .map(item => moment(item).format('YYYY-MM-DD'))
    this.reservation = { ...this.$store.state.reservation.info }
    if (this.reservation.reserve_time) {
      let [day, time] = (<string>this.reservation.reserve_time).split(' ')
      this.selected_day = day
      this.selected_time = time
    } else {
      this.selected_day = this.days[0]
    }
  }
  onChange() {
    this.$store.commit('reservation/save_reservation_info')
  }
  submit() {
    let reserve_time = this.selected_day + ' ' + this.selected_time
    let Reservation = getModule(ReservationModule, this.$store)
    Reservation.save_reservation_info({ reserve_time })
    this.$router.push(this.$route.fullPath.replace('time', 'invoice'))
  }
}
</script>
