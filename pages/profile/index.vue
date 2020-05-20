<style lang="scss" scoped>
</style>
<template>
  <div>
    hello {{$auth.user.name}}
    <v-btn color="red" @click="logout" dark>logout</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({
  middleware: 'auth',
  layout: 'insidepage'
})
export default class ProfilePage extends Vue {
  async logout() {
    await this.$auth.logout()
  }
}
</script>