<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
.v-expansion-panel-header {
  line-height: 1.8;
  @include media(sm) {
    line-height: 1;
  }
}
</style>
<template>
  <v-container grid-list-xs>
    <v-img :src="require('@/assets/img/faq.jpg')"></v-img>
    <div class="subtitle-1 mt-3"></div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(faq,i) in faqs" :key="i">
        <v-expansion-panel-header>{{faq.question}}</v-expansion-panel-header>
        <v-expansion-panel-content class="py-2 px-5" v-html="faq.answer"></v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
interface User {
  firstName: string
  lastName: string
}
@Component({
  layout: 'insidepage'
})
export default class YourComponent extends Vue {
  faqs = [
    {
      question: 'How secure is your payment system?',
      answer: `All our payments are handled by our payment gateway partner company which is regulated by the Financial Conduct Authority (FCA) in the UK. The payment provider is PCI compliant which means they meet the highest security for protecting your details, as demanded by the Payment Card Industry Data Security Standard (PCI DSS). Your card data (card number, CVV code etc) is never disclosed to ExpertGap. The payment provider sends us an authorisation allowing us to charge your card. You can revoke this authorisation at any time.`
    },
    {
      question: 'Where is my data stored?',
      answer: `You will receive a full refund if you login to your dashboard and cancel within 48 hours of your scheduled consultation time.`
    },
    {
      question: 'What if I am not happy with your service?',
      answer:
        'If you are not satisfied with your first consultation, please fill out the queries form on the Contact page or email us: info@expertgap.co.uk. We will promptly liaise with you to arrange a session with an alternative expert in the same field of your query, free of charge. If you were still not satisfied, we will investigate the matter and process a refund. '
    }
  ]
}
</script>

