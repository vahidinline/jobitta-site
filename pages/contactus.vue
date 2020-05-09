<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <div class="subtitle-1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error dolore corrupti. Excepturi mollitia culpa, amet voluptatibus, ullam nihil labore, vitae sed nulla officia aspernatur corrupti quo est! Numquam, quam.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non dolores suscipit adipisci debitis praesentium sit ipsum sed architecto nisi ipsam vitae odio tenetur ea corrupti, sequi reprehenderit corporis vel?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repellendus doloribus ullam, pariatur voluptates facilis maiores earum, porro quod voluptatibus inventore, quas reprehenderit velit cum eligendi itaque! Quibusdam, eius laudantium?</p>
    </div>
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

