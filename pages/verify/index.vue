<style lang="scss" scoped>
section {
  position: relative;
  min-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .form-wrapper {
    width: 500px;
    max-width: 90%;
  }
  .subtitle {
    color: #212121;
    margin-bottom: 30px;
    font-size: 13px;
  }
}
</style>
<template>
  <section>
    <div class="form-wrapper">
      <VerifyForm @onVerify="onVerify" />
    </div>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VerifyForm from '@/components/Pages/Login/VerifyForm/VerifyForm.vue'

@Component({
  layout: 'insidepage',
  head: {
    title: 'Verify'
  },
  components: {
    VerifyForm
  }
})
export default class LoginPage extends Vue {
  onVerify() {
    this.$router.push('/')
  }
}
</script>
