import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class CategoryService {
  constructor(public $axios: NuxtAxiosInstance) {}
  query() {
    return this.$axios.$get(`categories`)
  }
}
