<style lang="scss" scoped>
.header {
  display: flex;
  height: 94px;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  top: 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.homepage .header {
  position: absolute;
  top: 0;
  box-shadow: none;
  @include media(sm) {
    justify-content: space-between;
    padding: 0 30px;
  }
}
.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3rem;
  color: var(--v-primary-darken2);
  font-weight: 600;
  margin-top: 10px;
  img {
    max-width: 100%;
  }
}
.nvicon {
  display: inline-flex;
  margin-right: 16px;
  @include media(md) {
    display: none;
  }
}
nav {
  display: none;
  @include media(md) {
    display: flex;
  }
  margin-left: 16px;
  margin-top: 8px;
  @include media(lg) {
    margin-left: 30px;
  }
  ul {
    display: flex;
    height: 40px;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      position: relative;
      margin: 0 20px;
      @include media(lg) {
        margin: 0 32px;
      }
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
.header-btn {
  display: none;
  @include media(md) {
    display: flex;
    border-radius: 8px;
    border: 1px solid var(--v-primary-base);
    color: var(--v-primary-base) !important;
  }
}
</style>
<template>
  <div class="header">
    <slot name="navicon"></slot>
    <div class="logo-wrapper">
      <nuxt-link to="/">
        <img src="~assets/img/logo.png" alt />
      </nuxt-link>
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in $store.state.nav.items" :key="index">
          <nuxt-link :to="item.to">{{item.name}}</nuxt-link>
        </li>
      </ul>
    </nav>
    <v-spacer></v-spacer>
    <v-btn
      v-if="$auth.loggedIn"
      to="/profile/info"
      large
      depressed
      :raised="false"
      :ripple="false"
      class="header-btn text-none title"
    >
      <v-icon class="mr-2" size="28">la-user</v-icon>
      <span>{{$auth.user.name}}</span>
    </v-btn>
    <v-btn
      v-else
      to="/login"
      large
      depressed
      :raised="false"
      :ripple="false"
      class="header-btn login-btn text-none title"
    >
      <v-icon class="mr-2" size="28">la-user</v-icon>
      <span>Login / Register</span>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  drawer = false
}
</script>