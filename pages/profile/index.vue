<style lang="scss" scoped></style>

<template>
  <v-container class="mt-5">
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

  public head() {
    return {
      title: 'User Profile',
      bodyAttrs: {
        class: 'page-patient-profile'
      }
    }
  }

  async onDialogEditProfile() {
    const { user } = await this.$service.auth.getProfile()
    this.$auth.setUser(user)
    const dialogProfile = await this.$dialog.show({
      component: DialogEditPersonalInformation
    })
  }
}
</script>
