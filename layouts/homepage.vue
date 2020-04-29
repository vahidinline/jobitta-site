
<style lang="scss">
#laning-homepage {
  background: #fff;
}
</style>

<template>
  <v-app id="laning-homepage">
    <main>
      <section>
        <Header />
        <nuxt />
        <Footer />
      </section>
    </main>
  </v-app>
</template>
<script lang="ts">
import Header from '@/components/global/header/homepage.vue'
import Footer from '@/components/global/footer/homepage.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
    Header,
    Footer
  }
})
export default class component_name extends Vue {}
</script>
