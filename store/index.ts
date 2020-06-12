import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { NuxtStorage } from '@nuxtjs/universal-storage'
@Module
export default class Index extends VuexModule {
  location = null

  @Action
  nuxtClientInit() {}

  @Action({ rawError: true, commit: 'setLocation' })
  nuxtServerInit({
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
    if (process.server) {
      let ip =
        req.connection.remoteAddress ||
        req.socket.remoteAddress || // socket is an alias to connection, just delete this line
        req.connection.socket.remoteAddress
      if (process.env.NODE_ENV == 'development' && ip == '127.0.0.1') {
        ip = '85.214.132.117'
      }
      return $axios
        .$get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_APIKEY}&ip=` +
            ip
        )
        .then((data: any) => {
          $storage.setCookie('location', data)
          return data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
