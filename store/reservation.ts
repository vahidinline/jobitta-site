import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
interface IReservation {
  doctor_id?: number | string
  price?: string | number
  newPrice?: string | number
  reserve_time?: String
  payment_id?: String
}

@Module({
  name: 'reservation',
  namespaced: true
})
export default class Reservation extends VuexModule {
  info: IReservation = {}
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
