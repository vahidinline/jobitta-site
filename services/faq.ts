import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class FAQService {
  constructor(public $axios: NuxtAxiosInstance) {}
  query() {
    return this.$axios.$get(`faq`)
  }
}
