<style lang="scss">
.homepage {
  background: #fff;
}
</style>

<template>
  <v-app v-scroll:#scroll-target="onScroll">
    <main>
      <section>
        <Navigation v-model="drawer"></Navigation>
        <Header>
          <template #navicon>
            <div class="nvicon">
              <v-icon @click.stop="drawer = !drawer" color="primary darken2" size="48">la-bars</v-icon>
            </div>
          </template>
        </Header>
        <nuxt />
        <Footer />
      </section>
    </main>
    <div class="scrollTop" :class="{show:toTopButton}" @click="scrollToTop">
      <v-icon color="white" size="32">la-arrow-up</v-icon>
    </div>
    <v-bottom-sheet v-model="sheet" persistent dark>
      <v-sheet class="text-center pa-4">
        <div id="cookie-policy-info">
          <div class="cookie-policy-wrap">
            <div class="cookie-text-wrap">
              <p>
                We use cookies to ensure that you have the best experience on our website. If you continue to use this site we assume that you accept this.
                <nuxt-link class="info--text" target="_blank" to="/privacy">learn more</nuxt-link>
              </p>
            </div>
            <div class="cookie-btn-box">
              <v-btn color="info" outlined @click="acceptCookies">Accept Cookies</v-btn>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="inprogress_call">
      <v-sheet class="text-center pa-4">
        <div id="cookie-policy-info">
          <div class="cookie-policy-wrap">
            <div class="cookie-text-wrap">
              <p class="title">
                <v-icon class="mr-2" size="32" color="secondary">las la-hourglass-half</v-icon>You have 1 or more inprogress order
              </p>
            </div>
            <div class="cookie-btn-box">
              <v-btn color="info" class="text-none" outlined to="/profile">See Detail</v-btn>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-app>
</template>
<script lang="ts">
import Header from '@/components/Layout/header/header.vue'
import Footer from '@/components/Layout/footer/footer.vue'
import Navigation from '@/components/Layout/header/navigation.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  head: {
    bodyAttrs: {
      class: 'homepage'
    }
  },
  components: {
    Header,
    Footer,
    Navigation
  }
})
export default class HomePage extends Vue {
  drawer = false
  toTopButton = false
  sheet = false
  inprogress_call: boolean | Object = false
  beforeCreate() {
    this.$i18n.setLocale('en')
    this.$vuetify.rtl = false
  }
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    if (!this.$storage.getLocalStorage('accept_cookie')) {
      this.sheet = true
    }
    this.waiting_calls()
  }
  async waiting_calls() {
    if (!this.$auth.loggedIn) return
    this.inprogress_call = await this.$service.auth.waiting_calls()
  }

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll(e: any) {
    if (window.pageYOffset > 200) {
      this.toTopButton = true
    } else {
      this.toTopButton = false
    }
  }
  scrollToTop() {
    this.$vuetify.goTo(0, {
      duration: 1000
    })
  }
  acceptCookies() {
    this.sheet = false
    this.$storage.setLocalStorage('accept_cookie', 'true')
  }
}
</script>
