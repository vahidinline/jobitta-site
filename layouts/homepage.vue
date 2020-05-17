
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
  beforeCreate() {
    this.$i18n.setLocale('en')
    this.$vuetify.rtl = false
  }
  mounted() {
    window.addEventListener('scroll', this.onScroll)
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
}
</script>
