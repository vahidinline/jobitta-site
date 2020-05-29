<style lang="scss" scoped>
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-4 md7>
        <v-img :src="require('@/assets/img/contactus.jpg')"></v-img>
        <div class="subtitle-1 mt-2">
          <p>
            <span>We look forward to hearing from you. You may like to check out our</span>
            <nuxt-link to="/faq">Frequently Asked Questions</nuxt-link>
            <span>for some quick answers.</span>
          </p>
        </div>
      </v-flex>
      <v-flex pa-4 md5>
        <div class="title">Contact Us</div>
        <div class="subtitle-1 mb-2">
          <p>Please complete the form below to get in touch with any queries, concerns or feedback. We will get back to you promptly.</p>
        </div>
        <div class="form" ref="wrapper">
          <v-text-field
            v-validate="'required'"
            :error-messages="errors.collect('name')"
            v-model="contactus.name"
            outlined
            name="name"
            label="Full name"
          ></v-text-field>
          <v-text-field
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            v-model="contactus.email"
            outlined
            name="email"
            label="Your email address"
          ></v-text-field>
          <v-textarea
            v-validate="'required'"
            :error-messages="errors.collect('feedback')"
            v-model="contactus.feedback"
            outlined
            name="feedback"
            label="Query/Feedback"
          ></v-textarea>
          {{contactus.attachment}}
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
          <v-btn class="text-none" color="primary" outlined large @click="submit">Submit</v-btn>
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
  contactus: any = {}
  loader = false
  async submit() {
    let valid = await this.$validator.validateAll()
    if (!valid) {
      return
    }
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      var formData = new FormData()
      formData.append('attachment', this.contactus.attachment)
      formData.append('name', this.contactus.name)
      formData.append('email', this.contactus.email)
      formData.append('feedback', this.contactus.feedback)
      await this.$service.contactus.sotre(formData)
      this.$toast.success().showSimple('Your message Send Successfully')
      this.contactus = {}
    } catch (error) {
      console.log(error)
      this.$toast.error().showSimple("Your message Didn't Send Successfully")
    }
    loader.hide()
  }
}
</script>

