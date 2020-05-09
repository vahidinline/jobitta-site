<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <div>doctor list</div>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({
  layout: 'insidepage'
})
export default class DoctorList extends Vue {}
</script>