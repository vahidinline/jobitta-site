<style lang="scss" scoped>
.container {
  max-width: 90%;
  min-height: calc(100vh - 94px - 206px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  width: 400px;
  max-width: 100%;
}
h1 {
  font-size: 1.275rem;
  margin-bottom: 16px;
}
</style>
<template>
  <div class="container">
    <div class="wrapper" ref="wrapper">
      <h1>send your feedback about this session</h1>
      <div
        class="subtitle mb-3"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis vero ullam provident aliquid. Quos est quae culpa vero odit a officia cupiditate quod, mollitia ad? Quas deleniti debitis laboriosam natus?</div>
      <div class="form-wraaper">
        <v-rating v-model="feedback.rate" color="accent" class="mb-3"></v-rating>
        <v-textarea
          v-model="feedback.text"
          label="Your Feedback"
          name="feedback"
          v-validate="'required'"
          :error-messages="errors.collect('feedback')"
          @keypress.enter="onSubmit"
          outlined
        />
        <v-btn color="success" @click="onSubmit" outlined>Send Your Feedback</v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({
  layout: 'insidepage'
})
export default class FeedBackPage extends Vue {
  feedback = {
    text: '',
    rate: 3
  }

  async onSubmit() {
    let valid = await this.$validator.validate()
    if (!valid) {
      return
    }
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      let data = {
        track_id: this.$route.query.track_id,
        ...this.feedback
      }
      await this.$service.reservation.feedback(data)
      this.$toast.success().showSimple('Thanks, Your feedback deliver to us')
    } catch (error) {
      console.error(error)
      this.$toast.error().showSimple('Somthing wrong')
    }
    loader.hide()
  }
}
</script>