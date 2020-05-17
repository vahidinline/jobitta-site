<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-2 md5>
        <v-img :src="require('@/assets/img/about.png')"></v-img>
      </v-flex>
      <v-flex pa-2 md7>
        <div class="subtitle-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ex purus. Pellentesque bibendum eget arcu ut fringilla. Phasellus tempus, metus eu auctor euismod, tortor urna cursus turpis, eget pretium urna risus in tortor. Donec a nisi placerat, scelerisque mi ac, volutpat enim. Aliquam bibendum, magna quis lobortis dignissim, dolor ex mattis tellus, nec varius ligula felis in mauris. Cras consectetur, dui id porttitor ultricies, nunc massa ultrices lectus, nec finibus lectus sapien tristique lacus. Duis sit amet libero pretium, pharetra turpis vitae, finibus ipsum. Integer leo turpis, volutpat et quam non, vehicula condimentum justo. Aenean elementum lacinia aliquet. Aliquam accumsan viverra nibh sed tristique. Phasellus efficitur dui ut blandit posuere. Phasellus nec vestibulum nibh.</p>
          <p>Curabitur egestas, risus ac varius sodales, leo nisi iaculis dui, auctor ultricies dui mauris et augue. Sed diam mauris, faucibus et vestibulum ac, luctus nec arcu. Duis ornare sollicitudin odio, laoreet pharetra erat vestibulum eget. Nunc aliquet est velit, nec feugiat quam porttitor in. Proin urna sapien, suscipit eu aliquet in, ornare nec tortor. Praesent sit amet sapien et massa dictum scelerisque. Nulla eu lectus velit. Nullam tristique orci eget hendrerit elementum. Donec quis mi lectus. Ut vitae neque nunc. Donec vitae ultrices libero.</p>
          <p>Mauris gravida sit amet massa ut pharetra. Vivamus eget nunc ac felis luctus pretium vel egestas lacus. Nulla ultricies pretium libero, quis tincidunt tortor accumsan nec. Fusce efficitur auctor placerat. Maecenas iaculis ante nec tempus iaculis. In at mi quam. Aliquam ullamcorper suscipit quam ut commodo. Nunc maximus cursus venenatis. Donec quis sapien at risus lobortis auctor. Duis augue nisl, mollis a justo vel, accumsan dictum felis. Proin finibus finibus purus, eget varius risus. Donec bibendum mi quis ex mollis congue. Nam faucibus nibh vel congue feugiat.</p>
          <p>Nullam in ex et quam malesuada viverra. Proin hendrerit elit et porttitor varius. Proin vestibulum porttitor elit, efficitur malesuada risus hendrerit sed. Sed porttitor metus in tempor molestie. Maecenas pulvinar felis in urna convallis elementum. Aenean leo dolor, convallis quis elementum et, maximus sed magna. Aliquam ipsum neque, posuere eu aliquet in, volutpat a ligula. Morbi ac mollis nibh, id aliquam est. Nullam vitae mauris ut mi egestas cursus. Fusce vestibulum, lectus aliquam malesuada convallis, neque libero efficitur mauris, at posuere felis velit ut dui. Praesent lobortis sagittis diam, id iaculis dolor.</p>
          <p>Nam ultricies urna eu blandit scelerisque. In imperdiet molestie aliquam. Morbi rhoncus ante tortor. Proin id urna sed dui semper fringilla. Phasellus finibus sem at mauris ultrices, a dictum augue bibendum. Aliquam tincidunt magna sit amet dignissim finibus. Sed sit amet pellentesque massa, nec condimentum orci. Mauris fermentum, justo id finibus tincidunt, odio ipsum pulvinar felis, sit amet semper enim odio sit amet diam. Duis a elit nisi. Cras sed orci urna. Morbi velit neque, tristique ac turpis ac, lobortis tristique mauris. Donec quam ligula, dapibus non nibh eget, mattis euismod felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vestibulum nulla nibh, eget interdum turpis dictum facilisis.</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
interface User {
  firstName: string
  lastName: string
}
@Component({
  layout: 'insidepage',
  async asyncData() {
    let msg = 'hello class component'
    return {
      msg
    }
  },
  data: () => ({})
})
export default class YourComponent extends Vue {
  name = ''
  email = ''
  select = null
  picker = null
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  checkbox = null
  isActive = false
  user = {
    username: 'admin',
    password: 'admin',
    firstName: 'آرمین',
    lastName: 'خیرخواهان'
  }

  async login() {
    try {
      let response = await this.$auth
        .loginWith('local', { data: this.user })
        .then(() => {
          this.$toast.success().showSimple('با موفقیت وارد شدید')
        })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

