<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-4 md7>
        <v-img :src="require('@/assets/img/contactus.jpg')"></v-img>
        <div class="subtitle-1 mt-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error dolore corrupti. Excepturi mollitia culpa, amet voluptatibus, ullam nihil labore, vitae sed nulla officia aspernatur corrupti quo est! Numquam, quam.</p>
        </div>
      </v-flex>
      <v-flex pa-4 md5>
        <div class="title">Contact Us</div>
        <div class="subtitle-1 mb-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error dolore corrupti. Excepturi mollitia culpa, amet voluptatibus, ullam nihil labore, vitae sed nulla officia aspernatur corrupti quo est! Numquam, quam.</p>
        </div>
        <div class="form">
          <v-text-field outlined name="name" label="Your Name"></v-text-field>
          <v-text-field outlined name="title" label="Title"></v-text-field>
          <v-textarea outlined name="text" label="Text"></v-textarea>
          <v-btn class="text-none" color="primary" outlined large>Send</v-btn>
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

