<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
.v-expansion-panel-header {
  line-height: 1.8;
  @include media(sm) {
    line-height: 1;
  }
}
</style>
<template>
  <v-container grid-list-xs>
    <v-img :src="require('@/assets/img/faq.jpg')"></v-img>
    <div class="subtitle-1 mt-3"></div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(faq,i) in faqs" :key="i">
        <v-expansion-panel-header>{{faq.question}}</v-expansion-panel-header>
        <v-expansion-panel-content class="py-2 px-5" v-html="faq.answer"></v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'insidepage'
})
export default class YourComponent extends Vue {
  faqs = []
  async fetch() {
    this.faqs = await this.$service.faq.query()
  }
}
</script>

