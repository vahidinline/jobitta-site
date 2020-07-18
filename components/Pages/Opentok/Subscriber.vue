<template>
  <div></div>
</template>

<script>
import OT from '@opentok/client'
export default {
  name: 'subscriber',
  props: {
    stream: {
      type: OT.Stream,
      required: true
    },
    session: {
      type: OT.Session,
      required: true
    },
    opts: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      subscriber: null
    }
  },
  mounted: function() {
    this.subscriber = this.session.subscribe(
      this.stream,
      this.$el,
      this.opts,
      err => {
        if (err) {
          this.$emit('error', err)
        } else {
          this.$emit('subscriberConnected', this.subscriber)
        }
        if (this.subscriber.stream.hasVideo) {
          var imgData = this.subscriber.getImgData()
          this.subscriber.setStyle('backgroundImageURI', imgData)
        } else {
          this.subscriber.setStyle(
            'backgroundImageURI',
            process.env.BASE_URL + '/img/logo.jpeg'
          )
        }
      }
    )
    this.$emit('subscriberCreated', this.subscriber)
  }
}
</script>
