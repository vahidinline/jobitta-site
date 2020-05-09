<style lang="scss" scoped>
.wrapper {
  width: 900px;
  max-width: 90%;
  padding-top: 40px;
  margin: 0 auto;
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
    <div class="wrapper">
      <TimeTable>
        <template #bottom>
          <v-btn
            :disabled="!(selected_time && selected_day)"
            class="paypal-btn text-none title"
            @click="submit"
            dark
            block
            large
          >{{$t('stepper.time.continue')}}</v-btn>
          <div
            v-if="!(selected_time && selected_day)"
            class="error--text text-center mt-3"
          >{{$t('stepper.time.error')}}</div>
        </template>
      </TimeTable>
    </div>
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
import TimeTable from '@/components/Pages/doctors/detail/time_table.vue'
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'
import Sun from '~/assets/svg/sun.svg?inline'
import Moon from '~/assets/svg/moon.svg?inline'
import moment from 'moment-jalaali'
@Component({
  layout: 'stepper',
  components: {
    TimeTable
  }
})
export default class TimeSelect extends Vue {
  submit() {
    this.$router.push(this.$route.fullPath.replace('time', 'invoice'))
  }
}
</script>
