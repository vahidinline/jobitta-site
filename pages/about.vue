<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-2 md5 order-md-1 order-sm-2>
        <v-img :src="require('@/assets/img/about.png')"></v-img>
      </v-flex>
      <v-flex pa-2 md7 order-md-2 order-sm-1>
        <div class="subtitle-1">
          <p>The diverse and growing team of Experts on the GoDiet platform share exceptional commitment to clients as a core value. They are driven by the desire to support people and especially ethnic minorities with their personal, developmental and professional challenges and milestones. GoDiet strives in its mission to bridge the gap that is often presented by language and cultural barriers for achieving the heights of personal and professional development, while simultaneously nurturing the roots of rich native cultures in modern lifestyles.</p>
          <p>GoDiet provides you with the opportunity to conveniently connect with Experts in a range of areas, in your native language. The background and credentials of Experts in the GoDiet Network are vetted to ensure a high level of expertise. They are selected to match a range of ethnic and cultural backgrounds for a more personalised and empathetic consultation and extra peace of mind. We have matched these unique characteristics with affordable prices, in order to enhance access to expert support and mentoring for people from all walks of life.</p>
          <p>You can select an Expert, book a session at a time that suits you, and have a video consultation for the specified duration. You will received email confirmations and SMS reminders to ensure your session runs in a timely manner. Many GoDiet users continue to book follow-up sessions to enjoy continued support, mentoring and advice of their chosen Expert.</p>
          <p>The GoDiet platform is straightforward and easy to use, and ensures maximum privacy and confidentiality. Your personal data are encrypted and stored on private servers based in the UK, adhering to European GDPR regulation. Payments are processed securely via a payment gateway from our financial services partner, regulated by the Financial Services Authority (FCA).</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  layout: 'insidepage'
})
export default class YourComponent extends Vue {}
</script>

