import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class ContactusService {
  constructor(public $axios: NuxtAxiosInstance) {}
  sotre(data: Object) {
    return this.$axios.$post(`contactus`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
