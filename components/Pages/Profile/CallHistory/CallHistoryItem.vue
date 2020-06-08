<style lang="scss" scoped>
.call-item {
  padding: 16px;
  &--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex: 1;
      margin-top: 8px;
      @include media(md) {
        flex-direction: column;
        flex: inherit;
        width: auto;
      }
    }
    @include media(md) {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    & &--image {
      @include media(md) {
        width: 100px;
        flex: 0 0 100px;
      }
    }
    & &--expert {
      @include media(md) {
        width: 200px;
        flex: 0 0 200px;
      }
    }
    & &--status {
      @include media(md) {
        width: 150px;
        flex: 0 0 150px;
      }
    }
  }

  .label,
  .value {
    font-weight: bold;
  }
}
</style>

<template>
  <v-card class="call-item">
    <div class="call-item--wrapper">
      <v-img class="call-item--wrapper--image" :src="call.doctor.image" alt="alt" />
      <div class="call-item--wrapper--expert">
        <div class="label">Expert</div>
        <div class="value">{{ call.doctor.firstname }} {{ call.doctor.lastname }}</div>
      </div>

      <div class="call-item--wrapper--start">
        <div class="label">Session Start On</div>
        <div class="value">{{call.start | persianDate('YYYY/MM/DD HH:mm') }}</div>
      </div>

      <div class="call-item--wrapper--duration">
        <div class="label">Duration</div>
        <div
          class="value"
        >{{ call.doctor.session_duration_hint || call.doctor.session_duration }} Minute</div>
      </div>

      <div class="call-item--wrapper--status">
        <div class="label">Status</div>
        <vr-badge :color="colors[call.status]" type="dot">{{ call.status | enum('call_state') }}</vr-badge>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class CallHistoryItem extends Vue {
  colors = {
    cancelled: 'red lighten-1',
    approved: 'green',
    called: 'cyan',
    wait_for_call: 'pink',
    payment_pending: 'purple'
  }
  @Prop({
    type: Object,
    required: true
  })
  readonly call!: any
}
</script>
