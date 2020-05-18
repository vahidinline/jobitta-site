<style lang="scss" scoped>
.filters {
  padding: 0 16px;
  .v-input {
    max-width: 350px;
  }
}
.doctors {
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  &--item {
    background: #fff;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    width: calc(100% - 32px);
    flex: 0 0 calc(100% - 32px);
    flex-direction: row;
    height: auto;
    margin: 5px 16px;
    align-items: center;
    &.v-skeleton-loader {
      display: block;
    }
    @include media(sm) {
      flex-direction: column;
      width: calc(50% - 32px);
      flex: 0 0 calc(50% - 32px);
      margin: 16px;
    }
    @include media(md) {
      width: calc(33.3333% - 32px);
      flex: 0 0 calc(33.3333% - 32px);
    }
    @include media(lg) {
      width: calc(25% - 32px);
      flex: 0 0 calc(25% - 32px);
    }
    @include media(xl) {
      width: calc(20% - 32px);
      flex: 0 0 calc(20% - 32px);
    }
    &--info {
      display: flex;
      font-size: 14px;
      flex-direction: column;
      width: calc(100% - 120px);
      // flex: 1;
      @include media(sm) {
        width: 100%;
      }
      .v-btn {
        margin-bottom: 0;
        margin-top: 20px;
        @include media(md) {
          margin-top: 16px;
        }
      }
    }
    &--image {
      max-width: 112px;
      margin-top: 0px;
      margin-left: -20px;
      margin-right: 20px;
      @include media(sm) {
        flex: 1;
        height: 100%;
        max-width: 100%;
        margin-top: -20px;
        margin-right: 0px;
        margin-left: 0px;
        min-height: 200px;
      }
    }
    &--title {
      margin: 6px 8px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include media(xl) {
      }
      a {
        font-weight: bold;
        line-height: 1.33;
        text-align: left;
        color: #4b4b4b;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: inherit;
      }
    }
    .custom-devider {
      position: relative;
      width: 100%;
      height: 2px;
      &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 100%;
        height: 2px;
        background: #eee;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 24px;
        left: 0;
        height: 2px;
        background: var(--v-secondary-base);
      }
    }
    &--speciality {
      padding: 0 8px;
      margin-top: 16px;
      opacity: 0.7;
      font-weight: 500;
      line-height: 1.33;
      text-align: left;
      color: #4b4b4b;
    }
  }
}
</style>
<template>
  <v-container grid-list-xs>
    <section class="filters">
      <v-text-field
        outlined
        hide-details
        append-icon="la-search"
        name="search"
        label="Search Doctor"
        clearable
        @input="onSearch"
        v-model="search"
      ></v-text-field>
      <!-- <v-select outlined :items="items" v-model="value" label="Speciality"></v-select>
      <v-select outlined append-icon="la-sort" :items="items" v-model="value" label="Sort By"></v-select>-->
    </section>
    <section class="doctors">
      <template v-if="$fetchState.pending">
        <v-skeleton-loader
          :loading="true"
          v-for="item in 5"
          :key="'fetch'+item"
          class="doctors--item"
          type="image,list-item-two-line, actions"
        ></v-skeleton-loader>
      </template>
      <div class="doctors--item" v-for="doctor in doctors" :key="doctor.id">
        <div class="doctors--item--image">
          <nuxt-link :to="`/experts/${doctor.id}`">
            <v-img :src="doctor.image"></v-img>
          </nuxt-link>
        </div>
        <div class="doctors--item--info">
          <div class="doctors--item--title">
            <nuxt-link :to="`/experts/${doctor.id}`">{{doctor.firstname}} {{doctor.lastname}}</nuxt-link>
            <v-icon color="primary">la-video</v-icon>
          </div>
          <div class="custom-devider"></div>
          <div class="doctors--item--speciality">{{doctor.speciality.title}}</div>
          <div class="doctors--item--btn">
            <v-btn
              color="secondary"
              class="text-none subtitle-1 justify-space-around"
              outlined
              block
              :to="`/experts/${doctor.id}`"
            >
              <span>{{doctor.price}}$</span>
              <span>Book Now</span>
            </v-btn>
          </div>
        </div>
      </div>
      <template v-if="loading">
        <v-skeleton-loader
          :loading="true"
          v-for="item in 5"
          :key="'loading'+item"
          class="doctors--item"
          type="image,list-item-two-line, actions"
        ></v-skeleton-loader>
      </template>
    </section>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'insidepage'
})
export default class DoctorList extends Vue {
  items = [1, 2, 3, 4, 5, 6]
  value = 1
  search = ''
  doctors: any[] = []
  page = 1
  lastPage = 1
  perPage = 5
  total = 0
  offsetTop = 0
  timeout!: any
  loading = false
  async fetch() {
    await this.getDoctors()
  }
  async getDoctors() {
    let data = await this.$service.doctors.query({
      page: this.page,
      perPage: this.perPage,
      search: this.search
    })
    this.doctors.push(...data.data)
    this.page = data.page
    this.lastPage = data.lastPage
    this.perPage = data.perPage
    this.total = data.total
  }
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }
  onScroll(e: any) {
    if (this.page >= this.lastPage) {
      return
    }
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    let offsetTop = window.pageYOffset
    let windowHeight = window.innerHeight
    if (offsetTop + windowHeight >= scrollHeight - 200) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(async () => {
        this.loading = true
        this.page++
        await this.getDoctors()
        this.loading = false
      }, 200)
    }
  }
  onSearch() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(async () => {
      this.doctors = []
      this.loading = true
      this.page = 1
      await this.getDoctors()
      this.loading = false
    }, 1000)
  }
}
</script>