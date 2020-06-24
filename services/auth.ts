import { ResultProfile } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { User } from '~/models/User'
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
  getProfile(): Promise<{ user: User }> {
    return this.$axios.$get(`/auth/user`)
  }
  updateProfile(data: User): Promise<{ user: User }> {
    return this.$axios.$post(`/auth/user`, data)
  }
  reservations(): Promise<any[]> {
    return this.$axios.$get(`/auth/reservations`)
  }
  waiting_calls(): Promise<Object> {
    return this.$axios.$get(`/auth/waiting_calls`)
  }
  verify(token: string): Promise<ResultProfile> {
    return this.$axios.$post(`auth/verify`, { token })
  }
  verifyEmail(token: string): Promise<boolean> {
    return this.$axios.$post(`auth/verifyEmail`, { token })
  }
  resendToken(): Promise<string> {
    return this.$axios.$post(`auth/resendToken`)
  }
  resendVerifyEmail(): Promise<string> {
    return this.$axios.$post(`auth/resendVerifyEmail`)
  }
}
