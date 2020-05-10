import { ResultProfile } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
interface IAuthParams {
  username: string
  password: string
}
export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}
  register(params: IAuthParams): Promise<any> {
    return this.$axios.$post('auth/register', params)
  }
  login(params: IAuthParams): Promise<any> {
    return this.$axios.$post('auth/login', params)
  }
  getProfile(userId: string): Promise<ResultProfile> {
    return this.$axios.$get(`/Accounts/${userId}/Profile`)
  }
}
