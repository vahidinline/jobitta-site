import { ResultProfile } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getProfile(userId: string): Promise<ResultProfile> {
    return this.$axios.$get(`/Accounts/${userId}/Profile`)
  }
}
