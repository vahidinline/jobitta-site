
<style lang="scss">
#insidepage {
  background: #fff;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }
  .v-stepper {
    overflow: auto;
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
      box-shadow: none;
      max-width: 920px;
      margin: auto;
      @include media(xs-only) {
        width: 750px;
      }
      .v-divider {
        margin: 35px -77px 0;
        border-width: 2px;
      }
    }
    &__label {
      text-align: center;
      white-space: nowrap;
      @include media(xs-only) {
        display: inline-flex;
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
        border: 1px solid var(--v-secondary-darken2);
        color: var(--v-secondary-darken2) !important;
      }
      .v-stepper__label {
        color: var(--v-secondary-darken2) !important;
        text-shadow: none;
      }
    }
    &__step--complete {
      + .v-divider {
        border-color: #d6f7f3;
      }
      .v-stepper__label {
        color: var(--v-secondary-darken2) !important;
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
  .bottom-background {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-image: linear-gradient(to left, #13d1f3, #35d6c1);
    clip-path: ellipse(100% 100% at 50% 100%);
    z-index: -1;
    @include media(xs) {
      clip-path: ellipse(200% 100% at 50% 100%);
    }
  }
}
</style>

<template>
  <v-app class="insidepage-layout" id="insidepage">
    <main>
      <Header />
      <nuxt />
    </main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Header from '@/components/global/header/innerpage.vue'
import { Route } from 'vue-router'
@Component({
  components: {
    Header
  }
})
export default class InsidePage extends Vue {
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
