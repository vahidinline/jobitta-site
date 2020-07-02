<style lang="scss" scoped>
</style>
<template>
  <client-only>
    <openTok />
  </client-only>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import openTok from '@/components/Pages/Opentok/Session.vue'
@Component({
  components: { openTok }
})
export default class OpentokPage extends Vue {}
</script>