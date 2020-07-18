<style lang="scss" scoped>
.error-wrapper {
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  @include media(md) {
    flex-direction: row;
  }
}
</style>
<template>
  <v-container class="mt-5">
    <v-alert type="error" :value="!$auth.user.is_email_verified">
      <div class="error-wrapper">
        <span>Your Email ({{$auth.user.email}}) is not verified yet.</span>
        <a class="caption white--text" @click="resendVerifyEmail">Resend Email</a>
      </div>
    </v-alert>
    <v-row class="justify-center">
      <div>
        <v-btn @click="joinConversation" :loading="loading" color="primary">Join Conversation</v-btn>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" xs="12">
        <ProfileProgress :percentage="'25'" class="pa-5" @editProfile="onDialogEditProfile" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" xs="12">
        <CallHistory class="pa-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DialogEditPersonalInformation from '@/components/Pages/Profile/PersonalInformation/DialogEditPersonalInformation.vue'
import ProfileProgress from '@/components/Pages/Profile/ProfileProgress/ProfileProgress.vue'
import CallHistory from '@/components/Pages/Profile/CallHistory/CallHistory.vue'
import { Profile } from '@/models/Auth'
import fa from '../../locales/fa'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'auth',
  layout: 'insidepage',
  components: {
    ProfileProgress,
    CallHistory,
    DialogEditPersonalInformation
  }
})
export default class profile extends Vue {
  dialogEditPersonalInformation = false
  loading = false
  public head() {
    return {
      title: 'User Profile',
      bodyAttrs: {
        class: 'page-patient-profile'
      }
    }
  }
  async resendVerifyEmail() {
    try {
      await this.$service.auth.resendVerifyEmail()
      this.$toast.success().showSimple('Email send successfully')
    } catch (error) {
      this.$toast
        .error()
        .showSimple(
          "Can't send vrrification email to you. please call our support"
        )
    }
  }
  async onDialogEditProfile() {
    const { user } = await this.$service.auth.getProfile()
    this.$auth.setUser(user)
    const dialogProfile = await this.$dialog.show({
      component: DialogEditPersonalInformation,
      dialog_wrapper_custom_class: 'editProfileDialog'
    })
  }
  async joinConversation() {
    this.loading = true
    let data = await this.$axios.$get('opentok')
    let url = `${window.location.origin}/video-call?sessionId=${data.sessionId}&token=${data.publisherToken}`
    window.open(url, '_blank')
    this.loading = false
  }
}
</script>
