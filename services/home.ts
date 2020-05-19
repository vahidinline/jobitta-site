import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class HomeService {
  constructor(public $axios: NuxtAxiosInstance) {}
  doctors({ limit = 5 }) {
    return this.$axios.$get(`home/doctors?limit=${limit}`)
  }
  reviews({ limit = 5 }) {
    return this.$axios.$get(`home/reviews?limit=${limit}`)
  }
}
