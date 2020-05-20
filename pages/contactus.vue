<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-4 md7>
        <v-img :src="require('@/assets/img/contactus.jpg')"></v-img>
        <div class="subtitle-1 mt-2">
          <p>
            We look forward to hearing from you. You may like to check out our
            <nuxt-link to="/faq">Frequently Asked Questions</nuxt-link>for some quick answers.
          </p>
        </div>
      </v-flex>
      <v-flex pa-4 md5>
        <div class="title">Contact Us</div>
        <div class="subtitle-1 mb-2">
          <p>Please complete the form below to get in touch with any queries, concerns or feedback. We will get back to you promptly.</p>
        </div>
        <div class="form">
          <v-text-field v-model="contactus.fullname" outlined name="name" label="Full name"></v-text-field>
          <v-text-field v-model="contactus.email" outlined name="name" label="Your email address"></v-text-field>
          <v-textarea v-model="contactus.feedback" outlined name="title" label="Query/Feedback"></v-textarea>
          <v-file-input
            outlined
            :show-size="1000"
            :prepend-icon="null"
            prepend-inner-icon="$file"
            name="title"
            label="Attachments"
            placeholder="Add files here"
            v-model="contactus.attachment"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip color="deep-purple accent-4" dark label small>{{ text }}</v-chip>
            </template>
          </v-file-input>
          <v-btn class="text-none" color="primary" outlined large>Submit</v-btn>
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
  layout: 'insidepage'
})
export default class YourComponent extends Vue {
  contactus = {}
}
</script>

