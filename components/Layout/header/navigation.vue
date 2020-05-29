<style lang="scss" scoped>
.navigation {
  &--top {
    border-bottom: 1px solid var(--v-primary-base);
    display: flex;
    height: 60px;
    align-items: center;
    padding: 0 16px;
    .v-btn {
      margin: 0 !important;
    }
  }
  .logo-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    position: relative;
    a {
      padding-top: 10px;
      padding-left: 8px;
    }
    &:before {
      content: '';
      width: 90%;
      height: 2px;
      background-color: var(--v-primary-base);
      left: 0;
    }
    @include media(sm) {
      font-size: 3rem;
      img {
        max-width: 90%;
      }
    }
  }
}
</style>
<template>
  <v-navigation-drawer v-model="drawer" app left temporary>
    <div class="d-flex flex-column fill-height navigation">
      <div class="navigation--top">
        <v-btn
          v-if="$auth.loggedIn"
          class="ma-4 text-none subtitle-1"
          to="/profile"
          color="primary"
          large
          text
        >
          <v-icon size="30" class="mr-2">la-user</v-icon>
          <span>{{$auth.user.name}}</span>
        </v-btn>
        <v-btn v-else class="ma-4 text-none subtitle-1" to="/login" color="primary" large outlined>
          <v-icon size="30" class="mr-2">la-user</v-icon>
          <span>Login / Register</span>
        </v-btn>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <div class="logo-wrapper">
        <nuxt-link to="/">Expertgap</nuxt-link>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import NavModule from '@/store/nav'
@Component
export default class Navigation extends Vue {
  NavStore = getModule(NavModule, this.$store)

  @Prop({
    required: true
  })
  readonly value!: boolean

  get drawer() {
    return this.value
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
  set drawer(value) {
    this.$auth.user
    this.$emit('input', value)
  }
}
</script>