<style lang="scss" scoped>
section {
  margin-top: 40px;
  .form-wrapper {
    width: 600px;
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
      <RegisterForm @onRegister="onRegister" />
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
import RegisterForm from '@/components/Pages/Login/RegisterForm/RegisterForm.vue'
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'

@Component({
  layout: 'stepper',
  components: {
    RegisterForm
  }
})
export default class Register extends Vue {
  reservation = {}
  created() {
    if (this.$auth.loggedIn && this.$auth.user && this.$auth.user.is_verified) {
      this.$router.push(this.$route.fullPath.replace('register', 'invoice'))
    }
  }
  mounted() {
    this.reservation = { ...this.$store.state.reservation.info }
  }
  async onRegister() {
    this.$router.push(this.$route.fullPath.replace('register', 'verify'))
  }
}
</script>
