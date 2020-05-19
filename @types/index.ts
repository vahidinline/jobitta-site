import DoctorService from '~/services/doctors'
import AuthService from '~/services/auth'
import { User } from '~/models/User'
import HomeService from '~/services/home'
interface IEnum {
  toSelect: { text: string; value: number }[]
}
interface Storage {
  setState(key: string, val: any): void
  getState(key: string): any
  watchState(key: string, callback: (newValue: any) => any): void
  setCookie(key: string, val: any, isJson: boolean): void
  getCookie(key: string): any
  setLocalStorage(key: string, val: any, isJson: boolean): void
  getLocalStorage(key: string): any
}
interface Auth {
  user?: User
  loggedIn: boolean
  $storage: Storage
  loginWith(strategy: string, date: any): Promise<any>
  login(params: { data: any }): Promise<any>
  setUser(user: any): void
  setToken(strategy: string, token: string): void
  setUserToken(token: string): Promise<any>
  fetchUser(): Promise<any>
  hasScope(role: string): boolean
  logout(): void
  onError(callback: (error: string, name: string, endpoin: string) => any): void
  onRedirect(callback: (to: Object, from: Object) => any): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
  }
  interface Context {
    $auth: Auth
  }
  interface NuxtAppOptions {
    $auth: Auth
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    doctors: DoctorService
    auth: AuthService
    home: HomeService
  }
  interface NuxtEnumInstance {
    role: IEnum
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: string | boolean
  }
}
