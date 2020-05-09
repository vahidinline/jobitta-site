<style lang="scss" scoped>
.step-wrapper {
  position: relative;
}
.logo-wrapper {
  display: none;
  @include media(md) {
    position: absolute;
    left: 0;
    z-index: 99;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 3rem;
    padding-left: 32px;
  }
}
</style>
<template>
  <div>
    <div class="step-wrapper">
      <div class="logo-wrapper">
        <nuxt-link to="/">Expertgap</nuxt-link>
      </div>
      <v-stepper :value="current" alt-labels :class="'step-'+current">
        <v-stepper-header>
          <v-stepper-step
            @click="$router.push('/')"
            color="secondary darken-2"
            :complete="step > 1"
            step="1"
          >{{$t('stepper.selectSpecialist')}}</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            @click="$router.push(`/doctors/${$route.params.id}/register`)"
            color="secondary darken-3"
            :complete="step > 2"
            step="2"
          >{{$t('stepper.login')}}</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            @click="$router.push(`/doctors/${$route.params.id}/time`)"
            color="secondary darken-2"
            :complete="step > 3"
            step="3"
          >{{$t('stepper.chooseSessionTime')}}</v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step
            @click="$router.push(`/doctors/${$route.params.id}/invoice`)"
            color="secondary darken-2"
            :complete="step > 4"
            step="4"
          >{{$t('stepper.payment')}}</v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step color="secondary darken-2" step="5">{{$t('stepper.finish.label')}}</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </div>
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