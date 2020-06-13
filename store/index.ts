import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { NuxtStorage } from '@nuxtjs/universal-storage'
@Module
export default class Index extends VuexModule {
  location = null

  @Action
  nuxtClientInit() {}
  @Mutation
  setLocation(val: any) {
    this.location = val
  }
  @Action({ rawError: true, commit: 'setLocation' })
  async nuxtServerInit({
    req,
    $axios,
    $storage
  }: {
    req: any
    $axios: NuxtAxiosInstance
    $storage: NuxtStorage
  }) {
    // England 82.102.13.232
    // Germany 85.214.132.117
    // France 57.178.5.201
    // USA 161.185.160.93
    // canada 192.206.151.131
    // Australia 110.33.122.75
    if (process.server) {
      let ip = req.headers['x-forwarded-for']?.split(',')[0]
      if (process.env.NODE_ENV == 'development' && ip == '127.0.0.1') {
        ip = '110.33.122.75'
      }
      try {
        let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_APIKEY}&ip=${ip}`
        console.log(url)
        let data = await $axios.$get(url)
        $storage.setCookie('location', data)
        return data
      } catch (error) {
        console.log(error)
        return null
      }
    }
  }
}
