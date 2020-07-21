<style lang="scss" scoped>
::v-deep {
  .header {
    padding: 0 10px;
    @include media(md) {
      padding: 0 25px;
    }
  }
  .nav-tab {
    padding: 0;
    li {
      margin-left: 0 !important;
      margin-right: 20px;
      @include media(md) {
        margin-right: 50px;
      }
      .v-icon {
        margin-left: 0 !important;
        margin-right: 8px;
      }
    }
  }
}
</style>
<template>
  <v-container class="mt-5">
    <vr-navbar :items="items"></vr-navbar>
    <div class="content">
      <nuxt-child></nuxt-child>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { Profile } from '@/models/Auth'
import fa from '../../locales/fa'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'auth',
  layout: 'insidepage',
  components: {}
})
export default class profile extends Vue {
  loading = false
  items = [
    {
      title: 'Info',
      icon: 'la-info',
      to: '/info',
      base: '/profile'
    },
    {
      title: 'History',
      icon: 'la-history',
      to: '/history',
      base: '/profile'
    },
    {
      title: 'Notification',
      icon: 'la-bell',
      to: '/notification',
      base: '/profile'
    }
  ]
  public head() {
    return {
      title: 'User Profile',
      bodyAttrs: {
        class: 'page-patient-profile'
      }
    }
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
