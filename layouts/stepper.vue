
<style lang="scss">
.stepper-layout {
  background: #fff;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }
  .v-stepper {
    overflow: auto;
    @include media(md) {
      padding-left: 200px;
    }
    // @include media(xs-only) {
    //   &.step-2 {
    //     .v-stepper__header {
    //       transform: translateX(-20px);
    //     }
    //   }
    //   &.step-3 {
    //     .v-stepper__header {
    //       transform: translateX(-170px);
    //     }
    //   }
    //   &.step-5,
    //   &.step-4 {
    //     .v-stepper__header {
    //       transform: translateX(-300px);
    //     }
    //   }
    // }
    &__header {
      width: 750px;
      box-shadow: none;
      max-width: 920px;
      margin: auto;
      @include media(sm) {
        width: auto;
      }
      .v-divider {
        margin: 35px -77px 0;
        border-width: 2px;
      }
    }
    &__label {
      text-align: center;
      white-space: nowrap;
      display: inline-flex !important;
      @include media(sm) {
      }
    }
    &__step {
      width: 175px;
    }
    &__step__step {
      margin-right: 0;
      margin-left: 0;
      background: #999;
    }
    &__step--active {
      .v-stepper__step__step {
        background: #fff !important;
        border: 1px solid var(--v-secondary-base);
        color: var(--v-secondary-base) !important;
      }
      .v-stepper__label {
        color: var(--v-secondary-base) !important;
        text-shadow: none !important;
      }
    }
    &__step--complete {
      + .v-divider {
        border-color: var(--v-secondary-base) !important;
      }
      .v-stepper__label {
        color: var(--v-secondary-base) !important;
      }
    }
  }
  main {
    > section {
      position: relative;
      min-height: calc(100vh - 96px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
  }
  .notify-text {
    display: flex;
    color: #fff;
    align-items: flex-start;
    padding: 32px 16px;
    p {
      margin: 0;
      display: flex;
      min-height: 32px;
      align-items: center;
      & + p {
        margin-top: 16px;
      }
    }
    img {
      margin-right: 8px;
    }
  }
}
</style>

<template>
  <v-app class="stepper-layout">
    <main>
      <Header />
      <nuxt />
    </main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Header from '@/components/Layout/header/stepper.vue'
import { Route } from 'vue-router'
@Component({
  components: {
    Header
  }
})
export default class StepperLayout extends Vue {
  @Watch('$route', {
    deep: true
  })
  changeRoute(to: Route) {
    this.fixStepperPosition()
  }
  mounted() {
    if (this.$i18n.locale == 'fa') {
      this.$vuetify.rtl = true
    } else {
      this.$vuetify.rtl = false
    }
    this.fixStepperPosition()
  }
  fixStepperPosition() {
    if (this.$vuetify.breakpoint.mdAndDown) {
      let stepper = this.$el.querySelector('.v-stepper')
      if (stepper) {
        let left = 0
        switch (this.$route.name) {
          case 'doctor-id':
            left = 0
            break
          case 'doctor-id-register':
            left = 65
            break
          case 'doctor-id-login':
            left = 65
            break
          case 'doctor-id-time':
            left = 180
            break
          case 'doctor-id-invoice':
            left = 320
            break
          case 'doctor-id-finish':
            left = 340
            break
        }
        if (this.$vuetify.rtl) {
          stepper.scrollLeft = stepper.clientWidth - left
        } else {
          stepper.scrollLeft = left
        }
      }
    }
  }
  beforeCreate() {
    this.$store.commit('reservation/initialize_reservation_info')
  }
}
</script>
