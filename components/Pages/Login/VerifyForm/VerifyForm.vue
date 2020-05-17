<style lang="scss" scoped>
.v-card {
  width: 100%;
  .desc {
    font-size: 14px;
  }
}
</style>

<template>
  <div class="auth-form" ref="wrapper">
    <v-card class="d-flex flex-column">
      <div class="icon mt-10 d-flex justify-center">
        <Icon fileName="ic_password.svg" />
      </div>
      <form class="pa-6" @submit.prevent="onSubmit">
        <p class="desc font-weight-medium">token send to your phone number.</p>
        <div class="d-flex align-center">
          <nuxt-link to="/patient/login">
            <v-icon color="primary" class="mr-1">la-edit</v-icon>
            <span>edit phone number</span>
            <span>{{ user?user.mobile:'' }}</span>
          </nuxt-link>
        </div>
        <v-text-field
          v-model="token"
          class="ltr-input mt-4"
          placeholder="token"
          name="token"
          type="token"
          v-validate="{required:true,min:6,max:6,numeric:true}"
          :error-messages="errors.collect('token')"
          outlined
        />
        <div class="forgot-password font-weight-medium">
          <span>You have not received an SMS؟</span>
          <a @click="resendSms">Send again</a>
        </div>
        <v-btn class="mt-8 text-none" color="primary" block outlined @click="onSubmit">Verify</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Common/Icon/Icon.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon
  }
})
export default class LoginForm extends Vue {
  token = ''
  get user() {
    return this.$auth.user
  }
  beforeCreate() {
    if (!this.$auth.loggedIn) {
      this.$router.push(this.$route.path.replace('verify', 'register'))
    }
  }
  resendSms() {
    this.$service.auth.resendToken()
  }
  async onSubmit() {
    let valid = await this.$validator.validateAll()
    if (valid) {
      let loader = this.$loader.show(this.$refs.wrapper)
      try {
        let user = await this.$service.auth.verify(this.token)
        this.$auth.setUser(user)
        this.$toast.success().showSimple('verify Successfully')
        this.$emit('onVeriy')
      } catch (error) {
        console.error(error)
        loader.hide()
        let msg = 'An Error Occured. Please Try Again Later'
        try {
          msg = error.response.data.message
        } catch (error) {}
        this.$toast.error().showSimple(msg)
      }
    }
  }
}
</script>
