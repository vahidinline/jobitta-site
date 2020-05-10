<style lang="scss" scoped>
section {
  margin-top: 40px;
  .subtitle {
    color: #212121;
    margin-bottom: 30px;
    font-size: 13px;
  }
}
</style>
<template>
  <section>
    <LoginForm @onLogin="onLogin" />
    <div class="notify-text">
      <v-icon size="40" color="orange">la-info-circle</v-icon>
      <div>
        <p>Your information is secured based on GDPR.</p>
        <p>Your information is secured based on GDPR.</p>
      </div>
    </div>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import LoginForm from '@/components/Pages/Login/LoginForm/LoginForm.vue'
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'

@Component({
  layout: 'stepper',
  components: {
    LoginForm
  }
})
export default class Register extends Vue {
  reservation = {}
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push(this.$route.fullPath.replace('login', 'time'))
    }
  }
  mounted() {
    this.reservation = { ...this.$store.state.reservation.info }
    console.log(this.$route)
  }
  async onLogin() {
    this.$router.push(this.$route.fullPath.replace('login', 'time'))
  }
}
</script>
