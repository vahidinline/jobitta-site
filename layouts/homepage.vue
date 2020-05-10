
<style lang="scss">
.homepage {
  background: #fff;
}
</style>

<template>
  <v-app>
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
  beforeCreate() {
    this.$i18n.setLocale('en')
    this.$vuetify.rtl = false
  }
}
</script>
