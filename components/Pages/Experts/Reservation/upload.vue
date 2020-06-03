<style lang="scss" scoped>
.form-wrapper {
  max-width: 480px;
  padding: 32px;
  max-height: 600px;
  overflow: auto;
  &::v-deep {
    .images {
      > div {
        flex: 0 0 150px !important;
      }
      .image-wrapper {
        max-width: 150px;
        max-height: 150px;
        .v-icon {
          position: absolute;
          background: #000;
          border-radius: 100%;
          padding: 4px;
          font-size: 16px;
          left: 4px;
          top: 4px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="form-wrapper">
    <div class="d-flex">
      <h3 class="title">More Information</h3>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('hide')">la-times</v-icon>
    </div>
    <v-divider class="mb-3 mt-2"></v-divider>
    <div class="subtitle-1">
      <p>Send Description and related image help our experts get to know you better.</p>
    </div>
    <v-textarea
      outlined
      v-validate="'required'"
      :error-messages="errors.collect('description')"
      name="description"
      label="Description"
      v-model="description"
    ></v-textarea>
    <vr-file-upload
      v-model="images"
      name="images"
      :multiple="true"
      :error-message="[]"
      label="Drag & Drom images here"
    ></vr-file-upload>
    <div v-html="errorMessage" class="error--text mb-2 text-center"></div>
    <v-btn class="text-none" color="primary" block @click="submit">Send</v-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Upload extends Vue {
  images = []
  description = ''
  errorMessage: string | null = null
  submit() {
    if (!this.description && !this.images.length) {
      return (this.errorMessage = 'Description Or image is required ')
    }
    this.$emit('hide', {
      description: this.description,
      images: this.images
    })
  }
}
</script>