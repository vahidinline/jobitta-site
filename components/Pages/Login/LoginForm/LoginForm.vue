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
        <v-img max-width="128" :src="require('@/assets/img/ic_mobile_number.png')"></v-img>
      </div>
      <form class="pa-6" @submit.prevent="onSubmit">
        <p class="title">Login</p>
        <v-text-field
          v-model="form.username"
          label="Username"
          name="username"
          v-validate="'required'"
          :error-messages="errors.collect('username')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-text-field
          v-model="form.password"
          autocomplete="password"
          type="password"
          label="Password"
          name="password"
          placeholder=" "
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-btn block large color="primary" outlined class="text-none title" @click="onSubmit">Login</v-btn>
        <div class="mt-3">
          You haven't registered yet?
          <a
            @click="$router.push($route.path.replace('login','register'))"
          >Register Now</a>
        </div>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
  form = {
    username: '',
    password: '',
    recaptcha: ''
  }
  async onSubmit() {
    let valid = await this.$validator.validate()
    if (!valid) return
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      const token = await this.$recaptcha.execute('login')
      this.form.recaptcha = token
      await this.$auth.login({ data: this.form })
      loader.hide()
      await this.$toast
        .success()
        .timeout(1000)
        .showSimple('Login Successful')
      this.$emit('onLogin')
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
</script>
