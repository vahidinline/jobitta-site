import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'reservation',
  namespaced: true
})
export default class Reservation extends VuexModule {
  info: any = {}
  @Mutation
  clear_reservation_info() {
    this.info = {}
    localStorage.removeItem('reservation_info')
  }

  @Mutation
  save_reservation_info(reservation: Object) {
    this.info = Object.assign(this.info, reservation)
    localStorage.setItem('reservation_info', JSON.stringify(this.info))
  }

  @Mutation
  initialize_reservation_info() {
    if (process.browser) {
      let reservation = localStorage.getItem('reservation_info')
      if (reservation) {
        this.info = JSON.parse(reservation)
      }
    }
  }
}
