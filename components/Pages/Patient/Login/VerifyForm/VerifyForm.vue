<style lang="scss" scoped>
.auth-form {
  max-width: 396px;
  .desc,
  .help-block {
    font-size: 12px;
    color: #212121;
    line-height: 2;
  }
  .help-block {
    @media only screen and (max-width: 599px) {
      color: #fff;
    }
  }
  .desc {
    font-size: 14px;
  }
  ::v-deep {
    .v-btn {
      line-height: 48px;
      height: 48px;
    }
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
        <p class="desc font-weight-medium">
          شماره شما قبلا در رسا ثبت شده است. لطفا رمز عبود خود را وارد کنید.
        </p>
        <EditMobile />
        <v-text-field
          v-model="form.password"
          class="ltr-input mt-4"
          placeholder="رمز عبور"
          name="password"
          type="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          data-vv-as="رمز عبور"
          outlined
        />
        <div class="forgot-password font-weight-medium">
          <span>رمز عبور را فراموش کرده‌اید؟</span>
          <nuxt-link to="/">بازیابی رمز عبور</nuxt-link>
        </div>
        <v-btn class="mt-8" block @click="onSubmit">تایید و ادامه</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Common/Icon/Icon.vue'
import EditMobile from './EditMobile.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon,
    EditMobile,
  },
})
export default class LoginForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly value!: object
  fields!: []

  get form() {
    return this.value
  }
  set form(val) {
    this.$emit('input', val)
  }

  onSubmit() {
    this.$validator.validate().then(valid => {
      if (valid) {
        this.$emit('submit', {
          ...this.form,
          username: this.$auth.$storage.getCookie('login_mobile'),
          grant_type: 'password',
        })
      }
    })
  }
}
</script>
