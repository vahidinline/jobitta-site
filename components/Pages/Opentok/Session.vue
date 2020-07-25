<style lang="scss" scoped>
.OT_subscriber {
}
#publisher {
  width: 120px;
  height: 180px;
  overflow: hidden;
  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 99;
  border-radius: 16px;
  @include media(md) {
    width: 200px;
    height: 240px;
  }
  .v-icon {
    position: absolute;
    top: 8;
    left: 8;
    z-index: 100;
  }
  ::v-deep {
    .OT_audio-level-meter__audio-only-img {
      display: none;
    }
  }
}
#subscribers {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  min-height: 100vh;
  min-height: -webkit-fill-available;
  .bg {
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0px,
      rgba(0, 0, 0, 0) 40px,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .encrypt-icon {
    position: absolute;
    top: 0px;
    z-index: 4;
    left: 0px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
  }
  .name {
    position: absolute;
    bottom: 110px;
    z-index: 4;
    font-size: 30px;
    left: 20px;
    color: #fff;
  }
  ::v-deep {
    .OT_widget-container {
      background-color: #fff;
    }
    .OT_audio-level-meter__audio-only-img {
      display: none;
    }
    .OT_video-poster {
      background-position: center;
    }
  }
}
.icon-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
  z-index: 5;
  .v-btn {
    margin: 0 8px;
  }
}
.session-end {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.expertgap-logo {
  position: fixed;
  left: 20px;
  top: 40px;
  opacity: 0.3;
  width: 100px;
  z-index: 10;
}
</style>

<template>
  <client-only>
    <div v-if="sessionEnd" class="session-end">This Session Ended</div>
    <div id="session" @error="errorHandler" v-else>
      <div class="expertgap-logo">
        <v-img src="/img/logo.png"></v-img>
      </div>
      <div id="publisher" v-draggable="draggableValue">
        <!-- <v-icon :ref="handleId" color="white">la-arrows-alt</v-icon> -->
        <publisher
          :opts="publisherOption"
          :audio="publisherOption.audio"
          :video="publisherOption.video"
          :session="session"
          @error="errorHandler"
        ></publisher>
      </div>
      <!--   v-for="stream in streams" :key="stream.streamId"  -->
      <div v-if="subscriber" id="subscribers">
        <subscriber
          :opts="subscriberOption"
          @error="errorHandler"
          :stream="subscriber"
          :session="session"
        ></subscriber>
        <div class="bg"></div>
        <div class="encrypt-icon">
          <v-icon size="16" color="white" class="mr-1 mb-1">lock</v-icon>
          <span>End-to-end encrypted</span>
        </div>
        <!-- <div class="name">
          {{subscriberName}}
          <v-icon color="#fff">{{subscriber.hasAudio?'mic':'mic_off'}}</v-icon>
        </div>-->
      </div>

      <div class="icon-wrapper">
        <v-btn color="black" fab @click="toggleAudio">
          <v-icon color="white">{{publisherOption.audio?'mic':'mic_off'}}</v-icon>
        </v-btn>
        <v-btn color="red" fab @click="onEndCall">
          <v-icon color="white">call_end</v-icon>
        </v-btn>
        <v-btn color="black" fab @click="toggleVideo">
          <v-icon color="white">{{publisherOption.video?'videocam':'videocam_off'}}</v-icon>
        </v-btn>
      </div>
    </div>
  </client-only>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { Draggable } from 'draggable-vue-directive'
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
  components: { Publisher, Subscriber },
  directives: {
    Draggable
  }
})
export default class SessionComponent extends Vue {
  subscriber: any = null
  session: any = null
  sessionEnd: any = false
  publisherOption = {
    width: '100%',
    height: '100%',
    style: { buttonDisplayMode: 'off' },
    video: true,
    audio: true
  }
  subscriberOption = {
    width: '100%',
    height: '100%',
    style: { buttonDisplayMode: 'off', audioBlockedDisplayMode: 'off' }
  }
  handleId = 'handle-id'
  draggableValue: any = {
    handle: undefined
  }
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
  @Prop()
  subscriberName: any
  mounted() {
    this.calcVh()
    window.addEventListener('resize', this.calcVh)
    this.draggableValue.handle = this.$refs[this.handleId]
    let connectionsBeforeUs = 0
    this.session = OT.initSession(this.apiKey, this.sessionId)
    this.session.connect(this.token, (err: any) => {
      if (err) {
        errorHandler(err)
      }
    })
    this.session.on('connectionCreated', (event: any) => {
      if (
        event.connection.connectionId !==
          this.session.connection.connectionId &&
        event.connection.creationTime < this.session.connection.creationTime
      ) {
        connectionsBeforeUs += 1
        if (connectionsBeforeUs >= 2) {
          // We should leave there are 2 or more people already here before us
          alert('disconnecting this room is already full')
          this.session.disconnect()
        }
      }
    })
    this.session.on('streamCreated', (event: any) => {
      this.subscriber = event.stream
    })
    this.session.on('streamDestroyed', (event: any) => {
      this.subscriber = null
    })
  }
  destroyed() {
    window.removeEventListener('resize', this.calcVh)
  }
  calcVh() {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  errorHandler() {
    errorHandler
  }
  toggleVideo() {
    this.publisherOption.video = !this.publisherOption.video
  }
  toggleAudio() {
    this.publisherOption.audio = !this.publisherOption.audio
  }
  onEndCall() {
    this.session.destroy()
    this.sessionEnd = true
    this.$emit('onEnd')
  }
}
</script>



