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
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    @include media(lg) {
      justify-content: center;
    }
    li {
      padding: 4px 16px;
      flex: 0 0 50%;
      @include media(sm) {
        flex: 0 0 33.333%;
      }
      @include media(md) {
        flex: 0 0 25%;
      }
      @include media(lg) {
        flex: 0 0 auto;
      }
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: var(--v-secondary-base);
        display: inline-flex;
        margin-right: 8px;
      }
      a {
        color: #555;
        &.nuxt-link-exact-active {
          color: var(--v-secondary-base);
          border-bottom: 1px solid var(--v-secondary-base);
        }
        &:hover {
          color: var(--v-secondary-base);
        }
      }
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
    <div class="nav">
      <ul>
        <li v-for="(item, index) in navItems" :key="index">
          <nuxt-link :to="item.to">{{item.name}}</nuxt-link>
        </li>
      </ul>
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
import { getModule } from 'vuex-module-decorators'
import NavModule from '@/store/nav'

@Component({
  components: {
    bitMap
  }
})
export default class Footer extends Vue {
  NavStore = getModule(NavModule, this.$store)
  get year() {
    return moment().year()
  }
  get navItems() {
    let items = [...this.NavStore.items]
    items.unshift({
      name: 'Home',
      to: '/'
    })
    items.push({
      name: 'Terms & Conditions',
      to: '/terms'
    })
    items.push({
      name: 'Privacy Policy',
      to: '/privacy'
    })
    return items
  }
}
</script>