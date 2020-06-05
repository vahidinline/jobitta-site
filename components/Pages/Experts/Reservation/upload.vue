<style lang="scss" scoped>
.form-wrapper {
  max-width: 480px;
  padding: 32px;
  max-height: 630px;
  overflow: auto;
  &::v-deep {
    .images {
      justify-content: center;
      > div {
        flex: 0 0 150px !important;
      }
      .image-wrapper {
        max-width: 150px;
        max-height: 150px;
        margin: 0;
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
      <h3 class="title">Additional Information</h3>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('hide')">la-times</v-icon>
    </div>
    <v-divider class="mb-3 mt-2"></v-divider>
    <div class="subtitle-1">
      <p>If there is any information you would like to share with your Expert prior to your booked session, please write in the box below and/or click the browse button to upload any attachments. You will be able to add information and upload files any time up to your timetabled session, by logging into your profile page at expertgap.co.uk</p>
    </div>
    <v-textarea
      outlined
      v-validate="'required'"
      :error-messages="errors.collect('description')"
      name="description"
      v-model="description"
    ></v-textarea>
    <vr-file-upload
      v-model="images"
      name="images"
      :multiple="true"
      :error-message="[]"
      label="Brows Files Here"
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
  @Prop()
  scope!: any
  mounted() {
    this.images = this.scope.attachments || []
    this.description = this.scope.description || ''
  }
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