<style lang="scss" scoped>
section {
  padding-top: 40px;
  > .v-card {
    border-radius: 8px;
    padding: 30px 20px;
    @include media(sm) {
      padding: 40px 60px;
    }
  }
}
.days {
  width: 110px;
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
  @include media(lg) {
    width: 120px;
    height: 90px;
    font-size: 16px;
  }
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
.v-card--disabled {
  opacity: 0.5;
}
.v-card--link:focus:before {
  opacity: 0;
}
.time-wrapper {
  overflow-x: auto;
}
.time {
  width: 80px;
  flex: 0 0 80px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 13px;
  color: #000;
  font-weight: 500;
  @include media(lg) {
    width: 120px;
    flex: 0 0 120px;
    font-size: 16px;
  }
  @include ltr() {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  @include rtl() {
    &:first-child {
      margin-right: 0;
      // margin-left: 15px;
    }
    &:last-child {
      margin-left: 0;
      // margin-right: 15px;
    }
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
    <v-card>
      <div class="text-center">
        <div class="icon-wrapper">
          <img src="~assets/img/ic_select_date.png" />
        </div>
      </div>
      <div class="text-center subheading font-weight-bold mt-4">
        <p>{{$t('stepper.time.title')}}</p>
      </div>
      <div class="mt-4 body-1">
        <div class="d-flex flex-wrap justify-center">
          <v-card
            :ripple="false"
            :raised="false"
            @click="onDateClick(day)"
            :class="{active:selected_day==day}"
            class="days"
            v-for="day in days"
            :key="day"
          >
            <template v-if="$i18n.locale == 'en'">
              <div>{{day | persianDate('dddd','en')}}</div>
              <div>{{day | persianDate('MMMM Do','en')}}</div>
            </template>
            <template v-else>
              <div>{{day | persianDate('dddd','fa')}}</div>
              <div>{{day | persianDate('Do jMMMM ','fa')}}</div>
            </template>
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
              @click="onTimeClick(item)"
              :class="{active:selected_time==item.start}"
              class="time"
              v-for="(item, index) in times"
              :key="index"
            >
              <span class="icon">
                <component :is="item.start < '16:00'?'Sun':'Moon'"></component>
              </span>
              <template v-if="$i18n.locale == 'en'">
                <span>{{item.start}}</span>
                <span class="to">to</span>
                <span>{{item.end}}</span>
              </template>
              <template v-else>
                <span>{{item.start | persianDigit}}</span>
                <span class="to">تا</span>
                <span>{{item.end | persianDigit}}</span>
              </template>
            </v-card>
          </div>
        </div>
        <slot name="bottom"></slot>
      </div>
    </v-card>
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
  data: { [key: string]: any } = {}
  Reservation = getModule(ReservationModule, this.$store)

  @Prop()
  doctor!: any

  get times() {
    return this.selected_day && this.data[this.selected_day]
  }
  async mounted() {
    this.data = await this.$axios.$get(
      `doctors/${this.$route.params.id}/timeTable`
    )
    for (const key in this.data) {
      let offset = new Date().getTimezoneOffset()
      this.data[key].map((item: any) => {
        item.start = moment(item.start + ' +00:00', 'HH:mm Z')
          .utcOffset(offset * -1)
          .format('HH:mm')
        item.end = moment(item.end + ' +00:00', 'HH:mm Z')
          .utcOffset(offset * -1)
          .format('HH:mm')
        return item
      })
    }
    this.days = Object.keys(this.data)
      .map(item => moment(item))
      .sort((a: any, b: any) => {
        return a - b
      })
      .map(item => moment(item).format('YYYY-MM-DD'))

    this.reservation = { ...this.Reservation.info }

    if (
      this.reservation.doctor_id == this.doctor.id &&
      this.reservation.reserve_time
    ) {
      let [day, time] = (<string>this.reservation.reserve_time).split(' ')
      this.selected_day = day
      this.selected_time = time
    } else {
      this.Reservation.clear_reservation_info()
      this.selected_day = this.days[0]
      this.Reservation.save_reservation_info({
        doctor_id: this.doctor.id,
        reserve_time: null
      })
    }
  }
  onDateClick(item: any) {
    this.selected_day = item
    this.selected_time = null
    this.Reservation.save_reservation_info({ reserve_time: null })
  }
  onTimeClick(item: any) {
    this.selected_time = item.start
    let offset = new Date().getTimezoneOffset()
    let reserve_time = this.selected_day + ' ' + this.selected_time
    this.Reservation.save_reservation_info({ reserve_time })
  }
}
</script>
