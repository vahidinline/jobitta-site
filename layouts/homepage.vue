
<style lang="scss">
.home-layout {
  background: #fff;
  nav .logo-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    position: relative;
    a {
      padding-top: 10px;
      padding-left: 8px;
    }
    &:after {
      content: '';
      width: 90%;
      height: 2px;
      background-color: var(--v-primary-base);
      left: 0;
    }
    @include media(sm) {
      font-size: 3rem;
      img {
        max-width: 90%;
      }
    }
  }
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
import Header from '@/components/Layout/header/homepage.vue'
import Footer from '@/components/Layout/footer/homepage.vue'
import Navigation from '@/components/Layout/header/navigation.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  head: {
    bodyAttrs: {
      class: 'home-layout'
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
