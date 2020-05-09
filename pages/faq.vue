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
    <div class="subtitle-1 mt-3">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error dolore corrupti. Excepturi mollitia culpa, amet voluptatibus, ullam nihil labore, vitae sed nulla officia aspernatur corrupti quo est! Numquam, quam.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non dolores suscipit adipisci debitis praesentium sit ipsum sed architecto nisi ipsam vitae odio tenetur ea corrupti, sequi reprehenderit corporis vel?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repellendus doloribus ullam, pariatur voluptates facilis maiores earum, porro quod voluptatibus inventore, quas reprehenderit velit cum eligendi itaque! Quibusdam, eius laudantium?</p>
    </div>
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
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    },
    {
      question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam reprehenderit iusto neque sint ipsam, sed fuga doloribus voluptatum. Voluptate, unde voluptatum. Iusto, tempora! Atque ex debitis perferendis dolore repudiandae.'
    }
  ]
}
</script>

