import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class ReservationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  create(data: any) {
    return this.$axios.$post(`reservations`, data)
  }
  update(data: any) {
    return this.$axios.$put(`reservations/${data.track_id}`, data)
  }
  approve({ id, payment_id }: any) {
    return this.$axios.$post(`reservations/${id}/approve`, { payment_id })
  }
  checkCopoun({
    code,
    reservation_id
  }: {
    code: any
    reservation_id: string | number
  }) {
    return this.$axios.$post(`reservations/checkCopoun`, {
      code,
      reservation_id
    })
  }
}
