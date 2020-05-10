<style lang="scss" scoped>
.footer {
  margin-top: 16px;
  .bitmap {
    overflow: hidden;
  }
  svg {
    width: 300%;
    left: -100%;
    position: relative;
    @include media(sm) {
      width: 100%;
      height: auto;
      left: 0;
    }
    path {
      fill: var(--v-secondary-base);
      stroke: var(--v-secondary-base);
      stroke-width: 1;
    }
  }
  .copy-right {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #a5a5a5;
    margin: 16px 0;
  }
}
</style>
<template>
  <div class="footer">
    <div class="bitmap">
      <bitMap />
    </div>
    <div class="copy-right">
      <p>All rights reserved &copy; {{year}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment-jalaali'
import bitMap from '@/assets/svg/img_beat.svg?inline'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    bitMap
  }
})
export default class Footer extends Vue {
  get year() {
    return moment().year()
  }
}
</script>