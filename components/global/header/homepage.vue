<style lang="scss" scoped>
.header {
  display: flex;
  height: 94px;
  align-items: center;
  padding: 0 30px;
  position: absolute;
  width: 100%;
  top: 0;
  @include media(xs) {
    justify-content: space-between;
    padding: 0 30px;
  }
}
.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 4rem;
  color: var(--v-primary-darken2);
  font-weight: 600;
  margin-top: 16px;
  @include media(xs) {
    margin-top: 0px;
    font-size: 3rem;
    img {
      max-width: 90%;
    }
  }
}
.nvicon {
  display: none;
  @include media(xs) {
    display: inline-flex;
  }
}
.nav {
  margin-left: 50px;
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  @include media(xs) {
    display: none;
  }
  + .nav {
    margin-left: 31px;
  }
  &.active {
    a {
      color: #363636;
    }
    &:before {
      content: '';
      width: 100%;
      background-color: var(--v-secondary-base);
      box-shadow: 0 2px 8px 0 rgba(var(--v-secondary-base), 0.5);
      position: absolute;
      height: 4px;
      top: 100%;
      border-radius: 10px;
    }
  }

  a {
    font-size: 16px;
    font-weight: 600;
    color: #717171;
  }
}
</style>
<template>
  <div class="header">
    <!-- <div class="ml-4 nvicon">
      <v-icon color="secondary" size="40">la-bars</v-icon>
    </div>-->
    <div class="logo-wrapper">
      <nuxt-link to="/">Expertgap</nuxt-link>
      <!-- <img src="~assets/img/logo.png" alt /> -->
      <!-- <h3>رسا - رسانه سلامت ایرانیان</h3> -->
    </div>
    <!-- <div class="nav active">
      <a>برای ایرانیان خارج کشور</a>
    </div>
    <div class="nav">
      <nuxt-link to="/">برای ایرانیان داخل کشور</nuxt-link>
    </div>-->
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>