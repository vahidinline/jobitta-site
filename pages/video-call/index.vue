<style lang="scss" scoped>
</style>
<template>
  <v-app>
    <client-only>
      <openTok
        v-if="sessionId"
        :apiKey="apiKey"
        :sessionId="sessionId"
        :token="token"
        @onEnd="onEnd"
        :subscriberName="subscriberName"
      />
    </client-only>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import openTok from '@/components/Pages/Opentok/Session.vue'
import moment from 'moment'
Component.registerHooks(['fetch'])
@Component({
  components: { openTok }
})
export default class OpentokPage extends Vue {
  apiKey?: any = process.env.VUE_APP_API_KEY
  sessionId: any = null
  token: any = null
  reservation: any = null
  interval: any = null
  get is_user() {
    return !!this.$route.query.user_id
  }
  get is_doctor() {
    return !!this.$route.query.doctor_id
  }
  get subscriberName() {
    if (!this.reservation) {
      return ''
    }
    if (this.is_user) {
      return `${this.reservation.doctor.firstname} ${this.reservation.doctor.lastname}`
    }
    if (this.is_doctor) {
      return `${this.reservation.user.name} ${this.reservation.user.family}`
    }
  }
  async mounted() {
    if (this.$route.query.track_id) {
      let token = this.$route.query.token as string
      if (!token) {
        return this.$dialog.error().alert({
          title: 'Your Link Not Valid',
          ok_txt: 'Ok',
          message: 'Please Check Your Link'
        })
      }
      let { track_id, user_id, doctor_id } = this.parseToken(token)
      try {
        let data = await this.$service.reservation.createSession({
          track_id,
          user_id,
          doctor_id
        })
        this.checkVisibilityChange()
        this.sessionId = data.sessionId
        this.token = data.token
        this.reservation = data.reservation
        this.interval = setInterval(this.checkSessionTime, 5000)
      } catch (error) {
        this.$dialog.error().alert({
          message: 'somthing wrong',
          ok_txt: 'OK'
        })
      }
    }
  }
  parseToken(token: string) {
    let user_id, doctor_id
    let [type, id, track_id] = token.split('_')
    if (type == 'user') {
      user_id = id
    } else if (type == 'doctor') {
      doctor_id = id
    }
    return { doctor_id, user_id, track_id }
  }

  onEnd() {
    if (this.is_user) {
      this.$router.push(
        `/video-call/feedback?track_id=${this.reservation.track_id}`
      )
    }
  }
  checkVisibilityChange() {
    let hidden: any, visibilityChange: any
    if (typeof (<any>document).hidden !== 'undefined') {
      hidden = 'hidden'
      visibilityChange = 'visibilitychange'
    } else if (typeof (<any>document).mozHidden !== 'undefined') {
      hidden = 'mozHidden'
      visibilityChange = 'mozvisibilitychange'
    } else if (typeof (<any>document).msHidden !== 'undefined') {
      hidden = 'msHidden'
      visibilityChange = 'msvisibilitychange'
    } else if (typeof (<any>document).webkitHidden !== 'undefined') {
      hidden = 'webkitHidden'
      visibilityChange = 'webkitvisibilitychange'
    }
    document.addEventListener(
      visibilityChange,
      () => {
        window.location.reload()
      },
      false
    )
  }
  checkSessionTime() {
    let now = moment()
    let end = moment(this.reservation.end)
    let remain = moment.duration(end.diff(now)).as('minute')
    if (remain < 1) {
      clearInterval(this.interval)
      return this.$dialog.info().alert({
        message: `your session ended`,
        ok_txt: 'OK'
      })
    }
    if (remain < 6) {
      clearInterval(this.interval)
      this.$dialog.info().alert({
        message: `your session end in ${Math.ceil(remain)} minutes`,
        ok_txt: 'OK'
      })
    }
  }
}
</script>