<style lang="scss" scoped>
.v-card {
  > div {
    max-width: 600px;
    margin: 0 auto;
  }
}
.error-wrapper {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @include media(md) {
    flex-direction: row;
  }
  span {
    font-size: 14px;
  }
}
::v-deep {
  .v-alert__icon {
    align-self: center;
  }
}
</style>
<template>
  <div>
    <v-card class="pa-3" flat>
      <v-alert class type="warning" border="left" text :value="!$auth.user.is_email_verified">
        <div class="error-wrapper">
          <span>Your Email is not verified yet.</span>
          <v-btn class="caption" color="info" @click="resendVerifyEmail">Resend Email</v-btn>
        </div>
      </v-alert>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class ProfileNotificationPage extends Vue {
  async resendVerifyEmail() {
    try {
      await this.$service.auth.resendVerifyEmail()
      this.$toast.success().showSimple('Email send successfully')
    } catch (error) {
      this.$toast
        .error()
        .showSimple(
          `Can't send vrrification email to ${this.$auth?.user?.email}  you. please call our support`
        )
    }
  }
}
</script>