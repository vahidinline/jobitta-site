<style lang="scss" scoped>
</style>
<template>
  <v-app>
    <client-only>
      <openTok :apiKey="apiKey" :sessionId="sessionId" :token="token" />
    </client-only>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import openTok from '@/components/Pages/Opentok/Session.vue'
Component.registerHooks(['fetch'])
@Component({
  components: { openTok }
})
export default class OpentokPage extends Vue {
  apiKey?: any = process.env.VUE_APP_API_KEY
  sessionId?: any
  token?: any
  beforeCreate() {
    this.sessionId = this.$route.query.sessionId
    this.token = this.$route.query.token
  }
}
</script>