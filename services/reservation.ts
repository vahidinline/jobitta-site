import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class ReservationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  create(data: any) {
    return this.$axios.$post(`reservations`, data)
  }
  update(data: any) {
    return this.$axios.$put(`reservations/${data.track_id}`, data)
  }
  checkCopoun({ code, doctor_id }: { code: any; doctor_id: string | number }) {
    return this.$axios.$post(`reservations/checkCopoun`, { code, doctor_id })
  }
}
