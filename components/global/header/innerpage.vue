<style lang="scss" >
</style>
<template>
  <!-- <v-toolbar height="96" color="white">
    <div class="logo-wrapper">
      <img src="~assets/img/logo.png" alt />
      <h3>رسا - رسانه سلامت ایرانیان</h3>
    </div>
    <v-spacer></v-spacer>
    <v-btn color="secondary" outline round>
      بازگشت به مرحله قبل
      <v-icon size="20" class="mr-2">la-arrow-left</v-icon>
    </v-btn>
  </v-toolbar>-->
  <div class="step-wrapper">
    <v-stepper :value="current" alt-labels :class="'step-'+current">
      <v-stepper-header>
        <v-stepper-step
          @click="$router.push('/')"
          color="secondary darken-2"
          :complete="step > 1"
          step="1"
        >{{$t('selectSpecialist')}}</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/register`)"
          color="secondary darken-3"
          :complete="step > 2"
          step="2"
        >{{$t('login')}} / {{$t('register')}}</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/time`)"
          color="secondary darken-2"
          :complete="step > 3"
          step="3"
        >{{$t('chooseSessionTime')}}</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          @click="$router.push(`/doctor/${$route.params.id}/invoice`)"
          color="secondary darken-2"
          :complete="step > 4"
          step="4"
        >{{$t('payment')}}</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step color="secondary darken-2" step="5">{{$t('finish')}}</v-stepper-step>
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
      this.current = 1
      if (this.$route.name.includes('register')) {
        this.current = 2
      } else if (this.$route.name.includes('time')) {
        this.current = '3'
      } else if (this.$route.name.includes('invoice')) {
        this.current = '4'
      } else if (this.$route.name.includes('finish')) {
        this.current = '5'
      }
      return this.current
    }
  }
}
</script>