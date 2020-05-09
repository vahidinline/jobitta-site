import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class DoctorService {
  constructor(public $axios: NuxtAxiosInstance) {}
  query(options: any) {
    return this.$axios.$get(`doctors`, { params: options })
  }
  homePageDoctors() {
    return this.$axios.$get(`doctors/homePageDoctors`)
  }
}
