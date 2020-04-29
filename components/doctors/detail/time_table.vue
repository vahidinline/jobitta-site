<style lang="scss" >
#timeTable {
  position: relative;
  max-width: 1360px;
  background: #fff;
  padding: 50px;
  border-radius: 36px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  .close {
    position: absolute;
    cursor: pointer;
    left: 30px;
    top: 30px;
    width: 30px;
    height: 30px;
    path {
      fill: #ec4949;
    }
  }
  @include media(xs-only) {
    height: 700px;
  }
  .showhelp {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @include media(xs-only) {
      flex-direction: column;
    }
    > span {
      display: flex;
      align-items: center;
      @include media(xs-only) {
        width: 100%;
        margin-bottom: 15px;
      }
      .space-betwen {
        font-size: 2rem;
        @include media(xs-only) {
          display: none;
        }
      }
      img {
        @include media(xs-only) {
          flex: none;
          margin: 0 12px;
        }
      }
      .mobilereverse {
        display: none;
        @include media(xs-only) {
          display: flex;
          flex: 1;
          text-align: left;
        }
        span {
          @include media(xs-only) {
            width: 100%;
            text-align: left;
          }
        }
      }
      .mobilehide {
        @include media(xs-only) {
          display: none;
        }
      }
      .timesheet {
        color: #969696;
        @include media(xs-only) {
          flex: 1;
        }
      }
    }
    .morning {
      color: #febe10;
      span {
        margin-right: 5px;
      }
    }
    .evening {
      color: #ff8149;
      span {
        margin-right: 5px;
      }
    }
    .night {
      color: #0ec7e5;
      span {
        margin-right: 5px;
      }
    }
    .notaccess {
      color: #ef4065;
      span {
        margin-right: 5px;
      }
      .items {
        @include media(xs-only) {
          flex: 1;
        }
      }
      .item {
        + .item {
          margin-right: 5px;
        }
      }
    }
  }
  .time {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .days-2 {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: relative;
      height: 40px;
      flex: 1;
      background: none;
      border-radius: 30px;
      border: 1px solid var(--v-secondary-base);
      @include media(xs-only) {
        flex-direction: column;
        height: 100%;
        flex: 0;
      }
      span {
        color: #212121;
        font-size: 1.2rem;
        @include media(xs-only) {
          display: flex;
          align-items: center;
        }
        .rotate {
          @include media(xs-only) {
            transform: rotate(315deg);
          }
        }
        .sa,
        .mo,
        .we,
        .fr {
          top: 50px;
          position: absolute;
          display: flex;
          align-items: center;
          flex-direction: column;
          @include media(xs-only) {
            left: 60px;
            top: unset;
            flex-direction: row;
          }
          > img {
            @include media(xs-only) {
              display: none;
            }
          }
          img.mobileshowimportant {
            display: block !important;
            @include media(xs-only) {
              position: relative;
              top: -10px;
              left: 15px;
              transform: rotate(270deg);
            }
          }
          .items {
            display: flex;
            align-items: center;
            top: 70px;
            position: absolute;
            @include media(xs-only) {
              top: 0;
              position: relative;
              flex-direction: column;
            }
          }
        }
        .su,
        .tu,
        .th {
          > img {
            transform: rotate(180deg);
            @include media(xs-only) {
              display: none;
            }
          }
          img.mobileshowimportant {
            display: block !important;
            @include media(xs-only) {
              position: relative;
              top: -10px;
              right: 15px;
              transform: rotate(90deg);
            }
          }
          bottom: 50px;
          position: absolute;
          display: flex;
          align-items: center;
          flex-direction: column;
          @include media(xs-only) {
            right: 60px;
            bottom: unset;
            flex-direction: row;
          }
          .items {
            display: flex;
            align-items: center;
            bottom: 70px;
            position: absolute;
            @include media(xs-only) {
              bottom: 0;
              position: relative;
              flex-direction: column;
            }
            .item {
              @include media(xs-only) {
                flex-direction: row;
              }
              > div {
                @include media(xs-only) {
                  padding-left: 0;
                  padding-right: 10px;
                }
              }
              span {
                @include media(xs-only) {
                  padding-left: 0px;
                  padding-right: 6px;
                }
              }
            }
          }
        }
        .items {
          .item {
            width: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            @include media(xs-only) {
              flex-direction: row-reverse;
            }
            span {
              color: #9f9f9f;
              @include media(xs-only) {
                padding-left: 6px;
              }
            }
            .spacemobile {
              display: none;
              @include media(xs-only) {
                display: block;
              }
            }
            > div {
              padding-top: 10px;
              @include media(xs-only) {
                padding-top: 0;
                padding-left: 10px;
              }
            }
            + .item {
              border-left: 1px solid #c5c5c5;
              @include media(xs-only) {
                border-left: none;
              }
            }
          }
        }
      }
    }
  }
}
.item {
  span {
    font-size: 1rem !important;
    color: #353030 !important;
  }
  svg {
    width: 24px;
    height: auto;
  }
  .sun {
    path,
    circle {
      fill: #fcbd0e;
    }
  }
  .moon {
    path {
      fill: #0bc7e4;
    }
  }
}
</style>
<template>
  <section id="timeTable" ref="wrapper">
    <close v-if="close" class="close" @click="$emit('close')" />
    <div class="showhelp">
      <!-- <span class="morning">
        <div class="mobilereverse">
          <span>بازه صبح</span>
        </div>

<div class="sun">

        <sun  />
</div>
<div class="moon">

      ">بازه صبح</span>
</div>
        <span class="space-betwen">:</span>
        <span class="timesheet">{{this.morningtime.start}} - {{this.morningtime.end}}</span>
      </span>
      <span class="night">
        <div class="mobilereverse">
          <span>بازه شب</span>
        </div>
        <moon class="moon" />
        <span class="mobilehide">بازه شب</span>
        <span class="space-betwen">:</span>
        <span class="timesheet">{{this.nighttime.start}} - {{this.nighttime.end}}</span>
      </span>-->
      <span v-if="daynotaccess.length" class="notaccess">
        <div class="mobilereverse">
          <span>عدم پاسخگویی</span>
        </div>
        <img src="~assets/img/time-table/unavailable-icon.png" />
        <span class="mobilehide">عدم پاسخگویی</span>
        <span class="space-betwen">:</span>
        <span class="timesheet" v-if="!daynotaccess">-</span>
        <span v-for="item in daynotaccess" :key="item" class="items">
          <span class="item">{{ item | convertDay }}</span>
        </span>
      </span>
    </div>
    <div class="time">
      <div class="days-2">
        <span>
          <span class="rotate">{{$t('saturday')}}</span>
          <div class="sa">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.sa[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.sa[0]">
              <div class="item" v-for="(item, index) in events.sa" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('sunday')}}</span>
          <div class="su">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.su[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" class="mobileshowimportant" v-else />
            <div class="items" v-if="events.su[0]">
              <div class="item" v-for="(item, index) in events.su" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('monday')}}</span>
          <div class="mo">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.mo[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.mo[0]">
              <div class="item" v-for="(item, index) in events.mo" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('tuesday')}}</span>
          <div class="tu">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.tu[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.tu[0]">
              <div class="item" v-for="(item, index) in events.tu" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('wednesday')}}</span>
          <div class="we">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.we[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.we[0]">
              <div class="item" v-for="(item, index) in events.we" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('thursday')}}</span>
          <div class="th">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.th[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.th[0]">
              <div class="item" v-for="(item, index) in events.th" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
        <span>
          <span class="rotate">{{$t('friday')}}</span>
          <div class="fr">
            <img src="~assets/img/time-table/img-bottom.png" v-if="events.fr[0]" />
            <img src="~assets/img/time-table/img-notaccess.png" v-else />
            <div class="items" v-if="events.fr[0]">
              <div class="item" v-for="(item, index) in events.fr" :key="index">
                <div>
                  <div class="sun">
                    <sun v-if="item.time == 'morning'" />
                  </div>
                  <div class="moon">
                    <moon v-if="item.time == 'night'" />
                  </div>
                </div>
                <span>{{ item.start }}</span>
                <span class="spacemobile">-</span>
                <span>{{ item.end }}</span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
import sun from '~/assets/svg/sun.svg?inline'
import moon from '~/assets/svg/moon.svg?inline'
import close from '~/assets/svg/close_circle.svg?inline'
export default {
  props: {
    value: {},
    close: { default: true }
  },
  components: {
    sun,
    moon,
    close
  },
  filters: {
    convertDay(val) {
      let day
      switch (val) {
        case 'sa':
          day = 'شنبه'
          break
        case 'su':
          day = 'یکشنبه'
          break
        case 'mo':
          day = 'دوشنبه'
          break
        case 'tu':
          day = 'سه‌شنبه'
          break
        case 'we':
          day = 'چهارشنبه'
          break
        case 'th':
          day = 'پنجشنبه'
          break
        case 'fr':
          day = 'جمعه'
          break
      }
      return day
    }
  },
  data() {
    return {
      loading: true,
      events: {
        sa: [],
        su: [],
        mo: [],
        tu: [],
        we: [],
        th: [],
        fr: []
      },
      morningtime: {
        start: null,
        end: null
      },
      eveningtime: {
        start: null,
        end: null
      },
      nighttime: {
        start: null,
        end: null
      },
      daynotaccess: [],
      day: null
    }
  },

  async mounted() {
    let url = `https://resaa.net/api/Doctors/${
      this.$route.params.id
    }/TimeTable?clientTimeZoneOffset=${new Date().getTimezoneOffset()}`
    let loader = this.$loader.show(this.$refs.wrapper)
    try {
      let { result } = await this.$axios.$get(url)
      this.segments = result.timetable.segments

      for (const item of this.segments) {
        let start_hour = this.get_hour(item.from)
        let end_hour = this.get_hour(item.to)
        let start_minute = this.get_minute(item.from)
        let end_minute = this.get_minute(item.to)
        const day_of_week = this.get_day(item.from)
        let time_array = this.convert_time({
          start_hour,
          end_hour,
          start_minute,
          end_minute
        })
        this.push_time(day_of_week, time_array)
      }
      for (let day in this.events) {
        if (this.events[day].length == 0) {
          this.daynotaccess.push(day)
        }
      }
      this.$emit('input', this.events)
    } catch (error) {}
    loader.hide()
  },
  methods: {
    get_hour(value) {
      let hour = Math.floor((value / 60) % 24)
      return hour < 10 ? `0${hour}` : hour
    },
    get_minute(value) {
      let minute = Math.round(((value / 60) % 1) * 60)
      return minute < 10 ? `0${minute}` : minute
    },
    get_day(value) {
      let index = Math.floor(value / 60 / 24)
      let day
      switch (index) {
        case 0:
          day = 'sa'
          break
        case 1:
          day = 'su'
          break
        case 2:
          day = 'mo'
          break
        case 3:
          day = 'tu'
          break
        case 4:
          day = 'we'
          break
        case 5:
          day = 'th'
          break
        case 6:
          day = 'fr'
          break
      }
      return day
    },
    convert_time({ start_hour, start_minute, end_hour, end_minute }) {
      if (end_hour <= 14) {
        return [
          {
            start: `${start_hour}:${start_minute}`,
            end: `${end_hour}:${end_minute}`,
            time: 'morning'
          }
        ]
      } else {
        if (start_hour >= 14) {
          return [
            {
              start: `${start_hour}:${start_minute}`,
              end: `${end_hour}:${end_minute}`,
              time: 'night'
            }
          ]
        } else {
          return [
            {
              start: `${start_hour}:${start_minute}`,
              end: `14:00`,
              time: 'morning'
            },
            {
              start: `14:00`,
              end: `${end_hour}:${end_minute}`,
              time: 'night'
            }
          ]
        }
      }
    },
    push_time(day_of_week, time_array) {
      for (const item of time_array) {
        this.events[day_of_week].push(item)
      }
    }
  }
}
</script>
