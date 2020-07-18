<template>
  <div></div>
</template>

<script>
import OT from '@opentok/client'
export default {
  name: 'publisher',
  watch: {
    audio: function(value) {
      this.publisher.publishAudio(value)
    },
    video: function(value) {
      this.publisher.publishVideo(value)
    }
  },
  props: {
    session: {
      type: OT.Session,
      required: false
    },
    opts: {
      type: Object,
      required: false
    },
    audio: {
      default: true
    },
    video: {
      default: true
    }
  },
  data() {
    return {
      publisher: null
    }
  },
  mounted: function() {
    this.publisher = OT.initPublisher(this.$el, this.opts, err => {
      if (err) {
        this.$emit('error', err)
      } else {
        this.$emit('publisherCompleted')
      }
    })
    this.$emit('publisherCreated', this.publisher)
    const publish = () => {
      this.session.publish(this.publisher, err => {
        if (err) {
          this.$emit('error', err)
        } else {
          this.$emit('publisherConnected', this.publisher)
        }
      })
    }
    if (this.session && this.session.isConnected()) {
      publish()
    }
    if (this.session) {
      this.session.on('sessionConnected', publish)
    }
  }
}
</script>
