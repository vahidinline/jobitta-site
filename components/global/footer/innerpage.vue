<style lang="scss" >
</style>
<template>
  <div class="step-wrapper">
    <v-stepper :value="current" alt-labels :class="'step-'+step">
      <v-stepper-header>
        <v-stepper-step
          @click="$router.push('')"
          color="secondary"
          :complete="step > 1"
          step="۱"
        >انتخاب پزشک / روان‌شناس</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/register`)"
          color="secondary"
          :complete="step > 2"
          step="۲"
        >ورود/ثبت‌نام</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/time`)"
          color="secondary"
          :complete="step > 3"
          step="۳"
        >انتخاب زمان مشاوره</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/invoice`)"
          color="secondary"
          :complete="step > 4"
          step="۴"
        >پرداخت هزینه مشاوره تصویری</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step color="secondary" step="۵">انجام مشاوره تصویری</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: null
    }
  },
  mounted() {},

  computed: {
    step() {
      let step
      switch (this.$route.name) {
        case 'doctor-id':
          this.current = '۱'
          step = 1
          break
        case 'doctor-id-register':
          this.current = '۲'
          step = 2
          break
        case 'doctor-id-time':
          this.current = '۳'
          step = 3
          break
        case 'doctor-id-invoice':
          this.current = '۴'
          step = 4
          break
        case 'doctor-id-finish':
          this.current = '۵'
          step = 5
          break

        default:
          this.current = '۱'
          step = 1
          break
      }
      return step
    }
  }
}
</script>