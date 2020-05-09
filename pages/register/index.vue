<style lang="scss" scoped>
.auth {
  @include media(md) {
    background: url('~assets/img/auth_bg.png') no-repeat;
    background-position: bottom left;
    position: relative;
    z-index: 1;
    min-height: calc(100vh - 230px);
  }
  // @media only screen and (max-width: 599px) {
  //   background-image: none;
  //   margin-top: 0 !important;
  // }
  // @media only screen and (min-width: 1900px) {
  //   background-position-x: -200px;
  // }
  // .container {
  //   height: calc(100vh - 114px);
  // }
  // .login-wrap {
  //   @media only screen and (min-width: 1900px) {
  //     margin-right: 150px;
  //   }
  // }
}
</style>

<template>
  <div class="auth mt-5">
    <v-container class="d-flex align-center">
      <v-layout reverse wrap>
        <RegisterForm class="login-wrap" v-model="form" @submit="onSubmit" />
      </v-layout>
    </v-container>
    <BottomBackground v-if="$device.isMobile" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import RegisterForm from '@/components/Pages/Patient/Login/RegisterForm/RegisterForm.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'

@Component({
  layout: 'insidepage',
  head: {
    title: 'Login'
  },
  components: {
    RegisterForm,
    BottomBackground
  }
})
export default class LoginPage extends Vue {
  form = {
    mobile: this.$auth.$storage.getCookie('login_mobile') || null
  }

  onSubmit() {
    this.$router.push('/patient/login/verify')
  }
}
</script>
