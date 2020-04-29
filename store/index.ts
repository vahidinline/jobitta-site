import { Module, VuexModule, Action } from 'vuex-module-decorators'

@Module
export default class Index extends VuexModule {
  @Action
  nuxtClientInit() {}
  @Action
  nuxtServerInit() {}
}
