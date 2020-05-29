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
          autocomplete="new-name"
          v-model="user.name"
          label="Name"
          name="name"
          v-validate="'required'"
          :error-messages="errors.collect('name')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-text-field
          v-model="user.username"
          label="Username"
          name="username"
          v-validate="'required'"
          :error-messages="errors.collect('username')"
          @keypress.enter="onSubmit"
          outlined
        />
        <div>
          <v-text-field
            autocomplete="new-password"
            v-model="user.password"
            type="password"
            label="Password"
            name="password"
            v-validate="{required:true,regex:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/}"
            ref="password"
            :error-messages="errors.collect('password')"
            @keypress.enter="onSubmit"
            outlined
          />
          <span
            v-if="errors.collect('password')"
            class="caption mb-3 d-flex ml-2"
          >password must include [a-z] [0-9] [A-Z] and at least 6 character</span>
        </div>
        <v-text-field
          v-model="user.confirmpassword"
          type="password"
          label="Confirm Password"
          name="confirm password"
          v-validate="'required|confirmed:password'"
          :error-messages="errors.collect('confirm password')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-autocomplete
          v-model="user.country"
          outlined
          :items="counteryCodes"
          label="Country"
          name="country"
          v-validate="'required'"
          item-value="dial_code"
          item-text="name"
          :error-messages="errors.collect('country')"
          return-object
          @change="onSelectCountery"
        >
          <template v-slot:item="{item}">
            <template>
              <v-list-item-content>
                <v-list-item-title>{{item.dial_code}} {{item.code}}</v-list-item-title>
                <v-list-item-subtitle v-html="item.name"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
        <v-layout row wrap>
          <v-flex xs3 px-3>
            <v-text-field
              readonly
              v-model="user.code"
              type="code"
              label="Code"
              name="code"
              :error-messages="errors.collect('code')"
              @keypress.enter="onSubmit"
              outlined
            />
          </v-flex>
          <v-flex xs9 px-3>
            <v-text-field
              autocomplete="mobile"
              v-model="user.mobile"
              type="mobile"
              label="Mobile"
              name="mobile"
              v-validate="{required:true,regex:/^\d{10}$/}"
              :error-messages="errors.collect('mobile')"
              @keypress.enter="onSubmit"
              outlined
            />
          </v-flex>
        </v-layout>
        <v-text-field
          autocomplete="email"
          v-model="user.email"
          type="email"
          label="Email"
          name="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          @keypress.enter="onSubmit"
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
          >Login Now</a>
        </div>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
  user: any = {
    code: ''
  }

  mounted() {
    if (this.$auth.user && this.$auth.user.mobile) {
      this.user = { ...this.$auth.user }
      let code, mobile
      mobile = this.user.mobile.slice(
        this.user.mobile.length - 10,
        this.user.mobile.length
      )
      code = this.user.mobile.slice(0, this.user.mobile.length - 10)
      this.user.mobile = mobile
      this.user.code = code
    }
  }
  get counteryCodes() {
    return this.$store.state.geo.countries
  }
  onSelectCountery() {
    if (this.user.country) {
      this.user.code = this.user.country.dial_code
    } else {
      this.user.code = null
    }
  }
  async onSubmit() {
    let valid = await this.$validator.validate()
    if (!valid) return
    let loader = this.$loader.show(this.$refs.wrapper)
    let data = { ...this.user }
    try {
      const token = await this.$recaptcha.execute('login')
      data.recaptcha = token
      data.mobile = data.code + data.mobile
      let user = await this.$service.auth.register(data)
      this.$auth.setUserToken(user.token)
      this.$auth.setUser(data)
      loader.hide()
      await this.$toast
        .success()
        .timeout(1000)
        .showSimple('Register Successful')
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
