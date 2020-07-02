<style>
.OT_subscriber {
  float: left;
}
.OT_publisher {
  float: left;
}
</style>
<template>
  <client-only>
    <div id="session" @error="errorHandler">
      <publisher :session="session" @error="errorHandler"></publisher>
      <div id="subscribers" v-for="stream in streams" :key="stream.streamId">
        <subscriber @error="errorHandler" :stream="stream" :session="session"></subscriber>
      </div>
    </div>
  </client-only>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
let OT: any
if (process.client) {
  OT = require('@opentok/client')
}
import Publisher from './Publisher.vue'
import Subscriber from './Subscriber.vue'
const errorHandler = (err: any) => {
  alert(err.message)
}

@Component({
  components: { Publisher, Subscriber }
})
export default class SessionComponent extends Vue {
  streams: any = []
  session: any = null
  @Prop({
    default: process.env.VUE_APP_API_KEY
  })
  apiKey: any
  @Prop({
    default: process.env.VUE_APP_SESSION_ID
  })
  sessionId: any
  @Prop({
    default: process.env.VUE_APP_TOKEN
  })
  token: any
  mounted() {
    this.session = OT.initSession(this.apiKey, this.sessionId)
    this.session.connect(this.token, (err: any) => {
      if (err) {
        errorHandler(err)
      }
    })
    this.session.on('streamCreated', (event: any) => {
      this.streams.push(event.stream)
    })
    this.session.on('streamDestroyed', (event: any) => {
      const idx = this.streams.indexOf(event.stream)
      if (idx > -1) {
        this.streams.splice(idx, 1)
      }
    })
  }
  errorHandler() {
    errorHandler
  }
}
</script>



