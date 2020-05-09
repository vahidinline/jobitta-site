<style lang="scss" scoped>
.container {
  @include media(md) {
    padding: 0;
  }
}
.login-wrap {
  @include media(md) {
    flex: 0 0 400px;
    padding: 0 32px;
    display: flex;
    align-items: center;
  }
  @include media(xl) {
    flex: 0 0 600px;
    padding: 0 32px;
    margin-top: 32px;
    display: flex;
    align-items: flex-start;
  }
}
.v-image {
  display: none;
  @include media(md) {
    display: flex;
    flex: 0 0 calc(100% - 400px);
  }
  @include media(xl) {
    flex: 0 0 calc(100% - 900px);
  }
}
</style>

<template>
  <div class="auth mt-5">
    <v-container :fluid="!$vuetify.breakpoint.xlOnly">
      <v-layout justify-center justify-md-space-between>
        <v-img :src="require('@/assets/img/auth_bg.png')"></v-img>
        <LoginForm class="login-wrap" v-model="form" @submit="onSubmit" />
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LoginForm from '@/components/Pages/Patient/Login/LoginForm/LoginForm.vue'

@Component({
  layout: 'insidepage',
  head: {
    title: 'Login'
  },
  components: {
    LoginForm
  }
})
export default class LoginPage extends Vue {
  form = {
    mobile: this.$auth.$storage.getCookie('login_mobile') || null
  }

  onSubmit() {
    this.$vuetify.breakpoint.xlOnly
    this.$router.push('/patient/login/verify')
  }
}
</script>
