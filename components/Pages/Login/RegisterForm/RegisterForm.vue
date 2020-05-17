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
        <p class="title">Register</p>
        <v-text-field
          v-model="form.username"
          label="username"
          name="username"
          v-validate="'required'"
          :error-messages="errors.collect('username')"
          outlined
        />
        <div cla>
          <v-text-field
            autocomplete="password"
            v-model="form.password"
            type="password"
            label="password"
            name="password"
            placeholder=" "
            v-validate="{required:true,regex:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/}"
            ref="password"
            :error-messages="errors.collect('password')"
            outlined
          />
          <span
            v-if="errors.collect('password')"
            class="caption mb-3 d-flex"
          >password must include [!@#$&*] [a-z] [0-9] [A-Z] and at least 6 charachter</span>
        </div>
        <v-text-field
          autocomplete="password"
          v-model="form.confirmpassword"
          type="password"
          label="confirm password"
          name="confirm password"
          placeholder=" "
          v-validate="'required|confirmed:password'"
          :error-messages="errors.collect('confirm password')"
          outlined
        />
        <v-text-field
          autocomplete="name"
          v-model="form.name"
          type="name"
          label="name"
          name="name"
          placeholder=" "
          v-validate="'required'"
          :error-messages="errors.collect('name')"
          outlined
        />

        <v-layout row wrap>
          <v-flex xs3 px-3>
            <v-text-field
              autocomplete="code"
              v-model="form.code"
              type="code"
              label="code"
              name="code"
              placeholder="+44"
              v-validate="{required:true,regex:/^\+\d{0,3}$/}"
              :error-messages="errors.collect('code')"
              outlined
            />
          </v-flex>
          <v-flex xs9 px-3>
            <v-text-field
              autocomplete="mobile"
              v-model="form.mobile"
              type="mobile"
              label="mobile"
              name="mobile"
              placeholder=" "
              v-validate="{required:true,regex:/^\d{10}$/}"
              :error-messages="errors.collect('mobile')"
              outlined
            />
          </v-flex>
        </v-layout>
        <v-text-field
          autocomplete="email"
          v-model="form.email"
          type="email"
          label="email"
          name="email"
          placeholder=" "
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          outlined
        />
        <v-btn
          block
          large
          color="primary"
          outlined
          class="text-none title"
          @click="onSubmit"
        >Register</v-btn>
        <div class="mt-3">
          Have you registered before?
          <a
            @click="$router.push($route.path.replace('register','login'))"
          >login now</a>
        </div>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
  form: any = {
    username: '',
    password: '',
    recaptcha: ''
  }
  async onSubmit() {
    let valid = await this.$validator.validate()
    if (!valid) return
    let loader = this.$loader.show(this.$refs.wrapper)
    let data = { ...this.form }
    try {
      const token = await this.$recaptcha.execute('login')
      this.form.recaptcha = token
      data.mobile = data.code + data.mobile
      let user = await this.$service.auth.register(data)
      this.$auth.setUserToken(user.token)
      this.$auth.setUser(data)
      loader.hide()
      await this.$toast.success().showSimple('Register Successful')
      this.$emit('onRegister')
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
