<style lang="scss" scoped>
.profile-progress {
  flex-wrap: wrap;
  .left {
    min-width: 100%;
  }
  .left {
    margin-top: 15px;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    .v-btn {
      margin-top: 8px;
      .desc {
        min-width: 100%;
        margin-bottom: 15px;
      }
    }
    ::v-deep {
      button {
        margin-right: 0 !important;
      }
    }
  }
}
</style>

<template>
  <v-card class="profile-progress d-flex justify-space-between">
    <!-- <div class="right d-flex flex-column">
      <p class="font-weight-medium main-color">
        <span class="value">{{ percentage | persianDigit }}</span> % completed.
      </p>
      <v-progress-linear background-color="13d1f3" height="8" :value="percentage" rounded />
    </div>-->

    <div class="left">
      <div
        class="desc font-weight-medium"
      >Update your personal infromation then we can help you better.</div>
      <v-btn color="primary" outlined class="mr-6" @click="$emit('editProfile')">Update Information</v-btn>
      <v-btn color="red" outlined class="ml-6" @click="logout">Log Out</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ProfileProgress extends Vue {
  @Prop({ type: String, required: true }) readonly percentage!: String

  logout() {
    this.$auth.logout()
  }
}
</script>
