<style lang="scss" >
.main-section {
  display: flex;
  margin: 20px 30px;
  @include media(xs) {
    flex-direction: column;
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
    width: 310px;
    flex: 0 0 310px;
    margin-right: 32px;
    @include rtl() {
      margin-right: 0;
      margin-left: 32px;
    }
    @include media(xs) {
      width: 100%;
      flex: 0 0 100%;
      margin-right: 0;
    }
  }
  .right-pane {
    width: calc(100% - 310px - 32px);
    @include media(xs) {
      width: 100%;
      margin-top: 24px;
    }
  }
  .history {
    width: 55%;
    margin-right: 24px;
    @include rtl() {
      margin-right: 0;
      margin-left: 24px;
    }
    @include media(xs) {
      width: 100%;
      flex: 0 0 100%;
      margin-right: 0;
    }
  }
  .price {
    width: calc(45% - 24px);
    @include media(xs) {
      width: 100%;
      margin-top: 16px;
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
</style>
<template>
  <div class="main-section">
    <div class="left-pane">
      <v-skeleton-loader v-if="$fetchState.pending" type="image,list-item-two-line, actions"></v-skeleton-loader>
      <doctorInfo v-else :doctor="doctor" />
    </div>
    <div class="right-pane">
      <div class="d-flex flex-wrap">
        <div class="history">
          <template v-if="$fetchState.pending">
            <v-skeleton-loader type="heading"></v-skeleton-loader>
            <v-skeleton-loader v-for="index in 4" :key="index" type="list-item-avatar-two-line"></v-skeleton-loader>
          </template>
          <doctorHistory v-else :doctor="doctor" />
        </div>
        <div class="price hide-md">
          <template v-if="$fetchState.pending">
            <v-skeleton-loader v-for="index in 4" :key="index" type="list-item-avatar-two-line"></v-skeleton-loader>
          </template>
          <doctorPrice v-else :doctor="doctor" />
        </div>
      </div>
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
      <div class="comments">
        <v-skeleton-loader v-if="$fetchState.pending"></v-skeleton-loader>
        <doctorComments v-else :doctor="doctor" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import doctorInfo from '@/components/doctors/detail/info.vue'
import doctorHistory from '@/components/doctors/detail/history.vue'
import doctorPrice from '@/components/doctors/detail/price.vue'
import doctorComments from '@/components/doctors/detail/comments.vue'
import timeTable from '@/components/doctors/detail/time_table.vue'
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'insidepage',
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
}
</script>