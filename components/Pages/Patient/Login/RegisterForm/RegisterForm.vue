<style lang="scss" scoped>
.auth-form {
  width: 360px;

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
        <v-text-field
          autocomplete="password"
          v-model="form.mobile"
          type="password"
          label="password"
          name="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
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
          <nuxt-link to="/login">login now</nuxt-link>
        </div>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
  form = {}
  async onSubmit() {
    let valid = await this.$validator.validate()
    console.log('object')
  }
}
</script>
