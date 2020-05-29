<style lang="scss" scoped>
.list {
  .call-item {
    margin: 10px 0;
    @include media(md) {
    }
  }
}
</style>

<template>
  <v-card class="calls" outlined :loading="loading">
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">Reservation History</div>
      </div>
    </v-card-title>

    <div class="card-contetn mt-5">
      <div class="list" v-if="calls.length > 0">
        <CallHistoryItem v-for="call in calls" :key="call.id" :call="call" />
      </div>
      <div v-else class="empty d-flex flex-column align-center">
        <p class="font-weight-medium my-12">Your list is Empty.</p>
      </div>
    </div>

    <!-- <DialogRate v-model="dialogRateCall" /> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CallHistoryItem from './CallHistoryItem.vue'

@Component({
  components: {
    CallHistoryItem
  }
})
export default class CallHistory extends Vue {
  dialogRateCall = false
  loading = false
  calls: any[] = []

  async getCalls() {
    try {
      this.loading = true
      this.calls = await this.$service.auth.reservations()
      this.loading = false
    } catch (error) {
      this.loading = false
    }
  }

  mounted() {
    this.getCalls()
  }
}
</script>
