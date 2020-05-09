<style lang="scss" scoped>
.header {
  display: flex;
  height: 94px;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  top: 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3rem;
  color: var(--v-primary-darken2);
  @include media(xs) {
    font-size: 3rem;
    img {
      max-width: 90%;
    }
  }
}
.nvicon {
  display: inline-flex;
  margin-right: 16px;
  @include media(sm) {
    display: none;
  }
}
nav {
  display: none;
  @include media(sm) {
    display: flex;
  }
  margin-left: 50px;
  ul {
    display: flex;
    height: 40px;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      position: relative;
      margin: 0 32px;

      a {
        font-size: 16px;
        font-weight: 600;
        color: #717171;
      }
      .nuxt-link-exact-active {
        color: #363636;
        &:before {
          content: '';
          width: 100%;
          background-color: var(--v-secondary-base);
          box-shadow: 0 2px 8px 0 rgba(var(--v-secondary-base), 0.5);
          position: absolute;
          height: 2px;
          top: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  + .nav {
    margin-left: 31px;
  }
}
.login-btn {
  display: none;
  @include media(sm) {
    display: flex;
    border: 1px solid var(--v-primary-base);
    border-radius: 8px;
    color: var(--v-primary-base) !important;
  }
}
</style>
<template>
  <div class="header">
    <slot name="navicon"></slot>
    <div class="logo-wrapper">
      <nuxt-link to="/">Expertgap</nuxt-link>
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in $store.state.nav.items" :key="index">
          <nuxt-link :to="item.to">{{item.name}}</nuxt-link>
        </li>
      </ul>
    </nav>
    <v-spacer></v-spacer>
    <v-btn to="/login" depressed large :raised="false" :ripple="false" class="login-btn">
      <v-icon class="mr-3">la-user</v-icon>
      <span>Login / Register</span>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>