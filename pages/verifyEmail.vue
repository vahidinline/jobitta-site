<style lang="scss" scoped>
</style>
<template>
  <section>
    <v-container grid-list-xs>
      <div v-if="is_success">
        <v-alert type="success" :value="true">
          Your Email Verified Successfully.
          <br />Redirect To Home in a seccond
        </v-alert>
      </div>
      <div v-else>
        <v-alert type="error" :value="true">Your Token is not valid or have been expired.</v-alert>
      </div>
    </v-container>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'insidepage'
})
export default class VerifyEmailPage extends Vue {
  is_success = false
  async fetch() {
    if (this.$route.query.token) {
      this.is_success = await this.$service.auth.verifyEmail(
        this.$route.query.token as string
      )
    }
  }
  mounted() {
    if (this.is_success) {
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
    }
  }
}
</script>