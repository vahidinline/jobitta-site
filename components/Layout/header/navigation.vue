<style lang="scss" scoped>
</style>
<template>
  <v-navigation-drawer v-model="drawer" app left temporary>
    <div class="d-flex flex-column fill-height">
      <div class="logo-wrapper">
        <nuxt-link to="/">Expertgap</nuxt-link>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in $store.state.nav.items"
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
      <v-btn class="ma-4 text-none subtitle-1" to="/login" color="primary" large outlined>
        <v-icon size="30" class="mr-2">la-user</v-icon>
        <span>Login / Register</span>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
  @Prop({
    required: true
  })
  readonly value!: boolean

  get drawer() {
    return this.value
  }
  set drawer(value) {
    this.$emit('input', value)
  }
}
</script>