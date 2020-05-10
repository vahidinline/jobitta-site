<style lang="scss" scoped></style>

<template>
  <div class="edit-mobile d-flex align-center">
    <Icon fileName="ic_edit.svg" />
    <nuxt-link to="/patient/login" class="text mr-2">
      <span>ویرایش شماره</span>
      <span>{{ mobile }}</span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class EditMobile extends Vue {
  get mobile() {
    return this.$auth.$storage.getCookie('login_mobile')
  }
}
</script>
