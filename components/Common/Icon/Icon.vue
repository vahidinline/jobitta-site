<template>
  <img :src="src" :alt="fileName" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly fileName!: String

  get src() {
    return require(`@/assets/svg/${this.fileName}`)
  }
}
</script>
