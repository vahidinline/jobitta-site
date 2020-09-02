<style lang="scss" scoped>
</style>
<template>
  <div>
    <CallHistory />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import CallHistory from '@/components/Pages/Profile/CallHistory/CallHistory.vue'

@Component({
  components: {
    CallHistory
  }
})
export default class UserHistoryComponent extends Vue {
  mounted() {
    console.log(this.$enum)
  }
}
</script>