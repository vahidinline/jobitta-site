<style lang="scss" scoped>
section {
  margin-top: 40px;
  .form-wrapper {
    width: 500px;
    max-width: 90%;
  }
  .subtitle {
    color: #212121;
    margin-bottom: 30px;
    font-size: 13px;
  }
}
</style>
<template>
  <section>
    <div class="form-wrapper">
      <VerifyForm @onVerify="onVerify" />
    </div>
    <!-- <div class="notify-text">
      <v-icon size="40" color="orange">la-info-circle</v-icon>
      <div>
        <p>Your information is secured based on GDPR.</p>
        <p>Your information is secured based on GDPR.</p>
      </div>
    </div>-->
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import VerifyForm from '@/components/Pages/Login/VerifyForm/VerifyForm.vue'
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'

@Component({
  layout: 'stepper',
  components: {
    VerifyForm
  }
})
export default class Register extends Vue {
  reservation = {}
  created() {
    if (this.$auth.loggedIn && this.$auth.user && this.$auth.user.is_verified) {
      this.$router.push(this.$route.fullPath.replace('verify', 'invoice'))
    }
  }
  mounted() {
    this.reservation = { ...this.$store.state.reservation.info }
    console.log(this.$route)
  }
  async onVerify() {
    this.$router.push(this.$route.fullPath.replace('verify', 'invoice'))
  }
}
</script>
