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
        <p
          class="desc font-weight-medium"
        >A text message with a 6-digit verification code was just sent to</p>
        <div class="d-flex align-center">
          <a @click="editPhone">
            <!-- <v-icon color="primary" class="mr-1">la-edit</v-icon>
            <span>edit phone number</span>-->
            <span>{{ user?user.email:'' }}</span>
          </a>
        </div>
        <v-text-field
          v-model="token"
          class="ltr-input mt-4"
          placeholder="Enter code"
          name="token"
          type="token"
          v-validate="{required:true,min:6,max:6,numeric:true}"
          :error-messages="errors.collect('token')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-btn class="mb-4 text-none" color="primary" block outlined @click="onSubmit">Verify</v-btn>
        <div class="forgot-password font-weight-medium">
          <span>Not received a text message?</span>
          <a @click="resendSms">Send again</a>
        </div>
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
  editPhone() {
    this.$router.push(this.$route.path.replace('verify', 'register'))
  }
  async resendSms() {
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      await this.$service.auth.resendToken()
      this.$toast
        .success()
        .timeout(1000)
        .showSimple('SMS send successfully')
    } catch (error) {
      this.$toast
        .error()
        .timeout(1000)
        .showSimple("can't send sms")
    }
    loader.hide()
  }
  async onSubmit() {
    let valid = await this.$validator.validateAll()
    if (valid) {
      let loader = this.$loader.show(this.$refs.wrapper)
      try {
        loader.hide()
        let user = await this.$service.auth.verify(this.token)
        this.$auth.setUser(user)
        this.$toast
          .success()
          .timeout(1000)
          .showSimple('verify Successfully')
        this.$emit('onVerify')
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
