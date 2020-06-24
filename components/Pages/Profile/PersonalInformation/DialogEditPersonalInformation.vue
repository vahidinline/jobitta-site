<style lang="scss" >
.editProfileDialog {
  overflow: auto;
  max-height: 90%;
}
</style>

<template>
  <v-card class="pa-3" min-width="280">
    <v-card-title>
      <div class="flex-fill d-flex justify-space-between">
        <div class="title">Update Information</div>
        <v-spacer></v-spacer>
        <v-icon @click="$emit('close')">la-times</v-icon>
      </div>
    </v-card-title>

    <form class="pa-6" @submit.prevent="onSubmit" ref="wrapper">
      <v-select
        v-model="user.title"
        label="Title"
        name="title"
        v-validate="'required'"
        :error-messages="errors.collect('title')"
        @keypress.enter="onSubmit"
        :items="titleItems"
        outlined
      ></v-select>

      <v-text-field
        autocomplete="new-name"
        v-model="user.name"
        label="Name"
        name="name"
        v-validate="'required'"
        :error-messages="errors.collect('name')"
        @keypress.enter="onSubmit"
        outlined
      />
      <v-text-field
        v-model="user.family"
        label="Surname"
        name="family"
        v-validate="'required'"
        :error-messages="errors.collect('family')"
        @keypress.enter="onSubmit"
        outlined
      />
      <vr-date-picker
        v-model="user.birthday"
        label="Date of birth"
        outlined
        locale="en"
        :showOnFocus="true"
        format="YYYY/MM/DD"
      ></vr-date-picker>
      <v-autocomplete
        v-model="user.country"
        outlined
        :items="counteryCodes"
        label="Country"
        name="country"
        v-validate="'required'"
        item-value="dial_code"
        item-text="name"
        :error-messages="errors.collect('country')"
        return-object
        @change="onSelectCountery"
      >
        <template v-slot:item="{item}">
          <template>
            <v-list-item-content>
              <v-list-item-title>{{item.dial_code}} {{item.code}}</v-list-item-title>
              <v-list-item-subtitle v-html="item.name"></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
      <v-layout row wrap>
        <v-flex xs4 px-3>
          <v-text-field
            readonly
            v-model="user.code"
            type="code"
            label="Code"
            name="code"
            :error-messages="errors.collect('code')"
            @keypress.enter="onSubmit"
            outlined
          />
        </v-flex>
        <v-flex xs8 px-3>
          <v-text-field
            autocomplete="mobile"
            v-model="user.mobile"
            type="mobile"
            label="Mobile"
            name="mobile"
            v-validate="{required:true,regex:/^\d{10}$/}"
            :error-messages="errors.collect('mobile')"
            @keypress.enter="onSubmit"
            outlined
          />
        </v-flex>
      </v-layout>
      <v-text-field
        autocomplete="email"
        v-model="user.email"
        type="email"
        label="Email"
        name="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        @keypress.enter="onSubmit"
        outlined
      />
      <v-btn block large color="primary" outlined class="text-none title" @click="onSubmit">Update</v-btn>
    </form>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DialogEditPersonalInformation extends Vue {
  user: any = {
    code: ''
  }
  titleItems = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Other']

  mounted() {
    if (this.$auth.user && this.$auth.user.mobile) {
      this.user = { ...this.$auth.user }
      let code, mobile
      mobile = this.user.mobile.slice(
        this.user.mobile.length - 10,
        this.user.mobile.length
      )
      code = this.user.mobile.slice(0, this.user.mobile.length - 10)
      this.user.mobile = mobile
      this.user.code = code
    }
  }
  get counteryCodes() {
    return this.$store.state.geo.countries
  }
  onSelectCountery() {
    if (this.user.country) {
      this.user.code = this.user.country.dial_code
    } else {
      this.user.code = null
    }
  }
  async onSubmit() {
    let valid = await this.$validator.validate()
    if (!valid) return
    let loader = this.$loader.show(this.$refs.wrapper)
    let data = { ...this.user }
    try {
      const token = await this.$recaptcha.execute('login')
      data.recaptcha = token
      data.mobile = data.code + data.mobile
      let user = await this.$service.auth.updateProfile(data)
      this.$auth.setUser(data)
      loader.hide()
      await this.$toast
        .success()
        .timeout(1000)
        .showSimple('Update Successful')
      this.$emit('close')
    } catch (error) {
      console.error(error)
      loader.hide()
      let msg = 'An Error Occured. Please Try Again Later'
      try {
        msg = error.response.data.message
      } catch (error) {}
      this.$toast.error().showSimple(msg)
    }
  }
}
</script>
