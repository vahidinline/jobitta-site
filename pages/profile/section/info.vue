<style lang="scss" scoped>
</style>
<template>
  <div>
    <DialogEditPersonalInformation />
    <!-- <v-row>
      <v-col cols="12" sm="12" xs="12">
        <CallHistory class="pa-4" />
      </v-col>
    </v-row>-->
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import DialogEditPersonalInformation from '@/components/Pages/Profile/PersonalInformation/DialogEditPersonalInformation.vue'
import ProfileProgress from '@/components/Pages/Profile/ProfileProgress/ProfileProgress.vue'

@Component({
  components: {
    ProfileProgress,
    DialogEditPersonalInformation
  }
})
export default class ProfileInfoPage extends Vue {
  async onDialogEditProfile() {
    const { user } = await this.$service.auth.getProfile()
    this.$auth.setUser(user)
    const dialogProfile = await this.$dialog.show({
      component: DialogEditPersonalInformation,
      dialog_wrapper_custom_class: 'editProfileDialog'
    })
  }
}
</script>