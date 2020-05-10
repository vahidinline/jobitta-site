<style lang="scss" >
.main-section {
  display: flex;
  flex-direction: column;
  padding-bottom: 68px;
  margin: 20px 30px;
  @include media(md) {
    flex-direction: row;
    padding-bottom: 0;
  }
  .box {
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    padding: 16px;
  }
  .custom-title1 {
    font-size: 16px;
    font-weight: bold;
    color: #212121;
    position: relative;
    height: 36px;
    margin-bottom: 16px;
    &::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background: #6c6c6c;
      opacity: 0.2;
      left: 0;
      bottom: 0px;
      @include rtl() {
        left: auto;
        right: 0;
      }
    }
    &:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 25px;
      background: #f9a429;
      left: 0;
      bottom: 0px;
      @include rtl() {
        left: auto;
        right: 0;
      }
    }
  }

  .left-pane {
    width: 100%;
    flex: 0 0 100%;
    margin-right: 0;
    @include rtl() {
      margin-right: 0;
      margin-left: 32px;
    }
    @include media(md) {
      width: 480px;
      flex: 0 0 480px;
      margin-right: 32px;
    }
    @include media(xl) {
      width: 580px;
      flex: 0 0 580px;
    }
  }
  .right-pane {
    width: 100%;
    margin-top: 24px;
    @include media(md) {
      width: calc(100% - 480px - 32px);
      margin-top: 0;
    }
    @include media(xl) {
      width: calc(100% - 580 - 32px);
    }
  }
  .history {
    width: 100%;
    flex: 0 0 100%;
    margin-right: 0;

    @include rtl() {
      margin-right: 0;
      margin-left: 24px;
    }
  }
  .price {
    width: 100%;
    margin-top: 16px;
    @include media(lg) {
      width: calc(45% - 24px);
      margin-top: 0px;
    }
  }
  .services {
    margin-top: 40px;
    .service-content {
      display: flex;
      align-items: center;
    }
    p {
      color: #3d3d3d;
      font-size: 14px;
      margin-bottom: 0;
    }
  }
}
.comments {
  margin-top: 16px;
}
.fixed-bottom {
  position: fixed;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.16);
  bottom: 0;
  width: 100vw;
  left: 0;
  right: 0;
  padding: 16px 12px;
  li {
    list-style-type: none;
    font-size: 16px;
    span:first-child {
      font-weight: bold;
    }
  }
}
</style>
<template>
  <div class="main-section">
    <div class="left-pane">
      <v-skeleton-loader v-if="$fetchState.pending" type="image,list-item-two-line, actions"></v-skeleton-loader>
      <doctorInfo @onReserve="reserveDoctor" v-else :doctor="doctor" />
    </div>
    <div class="right-pane">
      <div class="history">
        <template v-if="$fetchState.pending">
          <v-skeleton-loader type="heading"></v-skeleton-loader>
          <v-skeleton-loader v-for="index in 4" :key="index" type="list-item-avatar-two-line"></v-skeleton-loader>
        </template>
        <doctorHistory v-else :doctor="doctor" />
      </div>
      <!-- <div class="d-flex flex-wrap">
       <div class="price hide-md">
          <template v-if="$fetchState.pending">
            <v-skeleton-loader v-for="index in 4" :key="index" type="list-item-avatar-two-line"></v-skeleton-loader>
          </template>
          <doctorPrice v-else :doctor="doctor" />
        </div> 
      </div>-->
      <div class="services">
        <!-- <template v-if="$fetchState.pending">
          <v-skeleton-loader type="heading"></v-skeleton-loader>
          <v-skeleton-loader class="pt-2" type="paragraph"></v-skeleton-loader>
        </template>
        <div v-else>
          <h3 class="custom-title1">{{$t('services')}}</h3>
          <p>
            <span v-for="(item, index) in doctor.categories" :key="index">
              {{item.title}}
              <span v-if="index < doctor.categories.length -1">،</span>
            </span>
          </p>
        </div>-->
        <div class="d-d"></div>
        <div class="mt-5">
          <template v-if="$fetchState.pending">
            <v-skeleton-loader type="heading"></v-skeleton-loader>
            <v-skeleton-loader class="pt-2" type="paragraph"></v-skeleton-loader>
          </template>
          <template v-else>
            <h3 class="custom-title1">{{$t('availabality')}}</h3>
            <div class="service-content">
              <v-icon class="ml-2" size="35" color="primary">la-exclamation-circle</v-icon>
              <p class="primary--text">{{$t('availabalityDesc')}}</p>
            </div>
          </template>
        </div>
      </div>
      <div class="timetable">
        <v-skeleton-loader v-if="$fetchState.pending"></v-skeleton-loader>
        <timeTable v-else v-model="doctor.timetable"></timeTable>
      </div>
      <div class="comments" v-if="doctor.reviews && doctor.reviews.length">
        <v-skeleton-loader v-if="$fetchState.pending"></v-skeleton-loader>
        <doctorComments v-else :doctor="doctor" />
      </div>
    </div>
    <div class="fixed-bottom d-md-none">
      <div>
        <li>
          <span>{{$t('pricing')}}:</span>
          <span class="orange--text">{{doctor.price * doctor.session_duration }} {{$t('currency')}}</span>
        </li>
      </div>
      <v-btn class="subtitle-1" color="secondary" @click="reserveDoctor">{{$t('reserve')}}</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import doctorInfo from '@/components/Pages/Experts/ExpertDetail/Info.vue'
import doctorHistory from '@/components/Pages/Experts/ExpertDetail/History.vue'
import doctorPrice from '@/components/Pages/Experts/ExpertDetail/Price.vue'
import doctorComments from '@/components/Pages/Experts/ExpertDetail/Comments.vue'
import timeTable from '@/components/Pages/Experts/ExpertDetail/TimeTable.vue'
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import ReservationStore from '@/store/reservation'
Component.registerHooks(['fetch'])
@Component({
  layout: 'stepper',
  components: {
    doctorInfo,
    doctorHistory,
    doctorPrice,
    doctorComments,
    timeTable
  }
})
export default class component_name extends Vue {
  doctor: any = {}
  // ReservationStore = getModule(ReservationStore, this.$store)
  // @Watch('$route', {
  //   deep: true
  // })
  // routeChange(from, to) {
  //   console.log(from, to)
  // }
  // beforeDestroy() {
  //   this.$i18n.setLocale('en')
  //   this.$vuetify.rtl = false
  // }
  async fetch() {
    this.doctor = await this.$axios.$get(`doctors/${this.$route.params.id}`)
    if (this.doctor.lang == 'fa') {
      this.$i18n.setLocale('fa')
      this.$vuetify.rtl = true
    } else {
      this.$i18n.setLocale('en')
      this.$vuetify.rtl = false
    }
  }
  mounted() {
    if (this.doctor.lang == 'fa') {
      this.$i18n.setLocale('fa')
      this.$vuetify.rtl = true
    } else {
      this.$i18n.setLocale('en')
      this.$vuetify.rtl = false
    }
  }

  reserveDoctor() {
    let Reservation = getModule(ReservationStore, this.$store)
    if (Reservation.info.reserve_time) {
      if (this.$auth.loggedIn) {
        return this.$router.push(`/experts/${this.$route.params.id}/invoice`)
      } else {
        return this.$router.push(`/experts/${this.$route.params.id}/login`)
      }
    }
    let messge = this.$t('errors.selectTime')
    this.$toast.error().showSimple(messge.toString())
    this.$vuetify.goTo('.timetable', {
      duration: 800
    })
  }
}
</script>