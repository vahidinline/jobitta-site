<style lang="scss" scoped>
.box {
  @include media(md) {
    position: sticky;
    top: 20px;
  }
}
.image-wrapper {
  text-align: center;
}
.doctor-name {
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}
.success-call {
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  .v-icon {
    margin-left: 6px;
  }
  span {
    margin: 0 2px;
  }
}
.doctor-info {
  ul {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      align-items: center;
      min-height: 36px;
      color: #6c6c6c;
      .v-btn {
        margin: 12px 0;
      }
    }
  }
}
.custom-btn {
  box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5) !important;
  // background-image: linear-gradient(263deg, #13d1f3, #35d6c1);
  border-radius: 8px;
}
.share-list,
.v-speed-dial {
  .facebook {
    .v-list-item__title,
    .v-icon {
      color: map-get($blue, darken-3) !important;
    }
  }
  .whatsapp {
    .v-list-item__title,
    .v-icon {
      color: map-get($green, base) !important;
    }
  }
  .linkedin {
    .v-list-item__title,
    .v-icon {
      color: map-get($blue, darken-1) !important;
    }
  }
  .instagram {
    .v-list-item__title,
    .v-icon {
      color: map-get($pink, darken-1) !important;
    }
  }
  .twitter {
    .v-list-item__title,
    .v-icon {
      color: map-get($blue, lighten-1) !important;
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="image-wrapper">
      <v-img :src="doctor.image" alt />
    </div>
    <div class="doctor-name">
      <span>{{doctor.firstname}}</span>
      <span>{{doctor.lastname}}</span>
    </div>
    <!-- <div class="success-call">
      <img src="~assets/img/ic_call.png" alt />
      <span>{{doctor.satisfiedCalls }}</span>
      <span>{{$t('successCall')}}</span>
    </div>-->
    <div class="doctor-info">
      <ul>
        <li>
          <span>{{$t('speciality')}}</span>
          <span>{{doctor.speciality.title}}</span>
        </li>
        <v-divider class="my-2"></v-divider>
        <li v-if="doctor.medicalCouncilNumber">
          <span>{{$t('medicalCouncilNumber')}}</span>
          <span class="orange--text">{{doctor.medicalCouncilNumber }}</span>
        </li>
        <v-divider v-if="doctor.medicalCouncilNumber" class="my-2"></v-divider>
        <li>
          <span>{{$t('pricing')}}</span>
          <span class="orange--text">€ {{doctor.price}}</span>
        </li>
        <li>
          <span>{{$t('sessionDuration')}}</span>
          <span>{{doctor.session_duration }} {{$t('minute')}}</span>
        </li>
        <li v-for="(workplace,index) in doctor.workplaces" :key="index">
          <span>{{$t('workplace')}}</span>
          <span>
            <a href>{{$t('show')}}</a>
          </span>
        </li>
        <li>
          <v-btn
            color="secondary"
            class="custom-btn"
            @click="$emit('onReserve')"
            dark
            block
          >{{$t('reserve')}}</v-btn>
        </li>
        <v-divider class="my-2"></v-divider>
        <li>
          <div v-if="$vuetify.breakpoint.smAndUp">
            <v-speed-dial
              bottom
              top
              left
              right
              direction="right"
              open-on-hover
              transition="fade-transition"
            >
              <template v-slot:activator>
                <v-btn text color="primary" class="text-capitalize">
                  <v-icon size="25" color="secondary" class="mr-2">la-share-alt</v-icon>
                  <span>{{$t('share')}}</span>
                </v-btn>
              </template>
              <v-btn
                fab
                small
                v-for="tile in tiles"
                :key="tile.title"
                :href="tile.url"
                target="_blank"
                class="ml-2"
                :class="tile.title"
              >
                <v-icon size="22">{{tile.icon}}</v-icon>
              </v-btn>
            </v-speed-dial>
          </div>
          <div v-else>
            <v-bottom-sheet v-model="share">
              <template v-slot:activator="{ on }">
                <v-btn text color="primary" v-on="on" class="text-capitalize">
                  <v-icon size="25" color="secondary" class="mr-2">la-share-alt</v-icon>
                  <span>{{$t('share')}}</span>
                </v-btn>
              </template>
              <v-list class="share-list">
                <v-subheader>Share in</v-subheader>
                <v-list-item
                  :class="tile.title"
                  v-for="tile in tiles"
                  :key="tile.title"
                  :href="tile.url"
                  target="_blank"
                >
                  <v-list-item-avatar>
                    <v-avatar size="32px" tile>
                      <v-icon>{{tile.icon}}</v-icon>
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-bottom-sheet>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component
export default class component_name extends Vue {
  share = false
  tiles: any = []
  @Prop({
    required: true
  })
  doctor!: any
  mounted() {
    let location = window.location.href
    this.$vuetify.breakpoint.smAndUp
    this.tiles = [
      // {
      //   title: 'facebook',
      //   icon: 'socicon-facebook',
      //   url: `https://facebook.com`
      // },
      {
        title: 'whatsapp',
        icon: 'socicon-whatsapp',
        url: `whatsapp://send?text=${location}`
      },
      {
        title: 'linkedin',
        icon: 'socicon-linkedin',
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${location}&title=Expertgap&summary=${this.doctor.firstname}%20${this.doctor.lastname}&source=LinkedIn`
      },
      {
        title: 'twitter',
        icon: 'socicon-twitter',
        url: `https://twitter.com/intent/tweet?hashtags=EXPERTGAP&original_referer=${location}&ref_src=twsrc%5Etfw&text=${this.doctor.firstname}%20${this.doctor.lastname}&tw_p=tweetbutton&url=${location}`
      }
    ]
  }
}
</script>
