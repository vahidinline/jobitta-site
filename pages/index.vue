<style lang="scss" scoped>
.top-section {
  display: flex;
  background: linear-gradient(-45deg, #adebfb, #fff);
  @include media(xs) {
    flex-direction: column;
  }
  .left-section {
    margin-top: 130px;
    width: 530px;
    margin-left: 30px;
    @include media(xs) {
      margin-top: 90px;
      max-width: 70%;
    }
    h1 {
      font-size: 25px;
      line-height: 32px;
      font-weight: bold;
      @include media(xs) {
        font-size: 19px;
        line-height: 38px;
        font-weight: 700;
      }
      span {
        color: var(--v-primary-base);
        position: relative;
        display: inline-block;
        font-size: 25px;
        &:before {
          content: '';
          width: 100%;
          background-color: var(--v-primary-base);
          box-shadow: 0 2px 8px 0 rgba(var(--v-primary-base), 0.5);
          position: absolute;
          height: 4px;
          top: 100%;
          border-radius: 10px;
        }
      }
    }
    p {
      color: #000;
      margin-top: 24px;
      font-size: 15px;
      line-height: 24px;
      text-align: left;
    }
  }
  .right-section {
    background-image: url(~assets/img/img_header@2x.png);
    height: 730px;
    width: calc(100% - 530px);
    background-position: -10px 45x;
    background-size: 125%;
    @include media(xs) {
      background-image: url(~assets/img/img_header.png);
      width: 100%;
      background-position: 0px -10px;
      height: 520px;
    }
  }
}
.doctor-list {
  display: flex;
  flex-wrap: wrap;
  margin: -320px auto 0;
  margin-top: -320px;
  max-width: 1660px;
  @include media(lg) {
    max-width: 1110px;
  }
  @include media(xs) {
    width: 100%;
    margin: -320px 0 0;
  }
  .doctor-item {
    margin: 16px;
    background: #fff;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    width: 300px;
    flex: 0 0 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    @include media(lg) {
      width: 190px;
      flex: 0 0 190px;
      height: 295px;
    }
    @include media(xs) {
      width: calc(100% - 32px);
      flex: 0 0 calc(100% - 32px);
      flex-direction: row;
      height: auto;
      margin: 5px 16px;
    }
    .doctor-info {
      display: flex;
      flex-direction: column;
      // flex: 1;
      font-size: 12px;

      @include media(xs) {
        display: flex;
        font-size: 14px;
        flex-direction: column;
        width: calc(100% - 140px);
      }
      .v-btn {
        margin-bottom: 0;
        margin-top: 20px;
        @include media(lg) {
          margin-top: 16px;
        }
        @include media(xs) {
          margin-top: 20px;
        }
      }
    }
    .doctor-image {
      margin-top: -20px;
      flex: 1;
      height: 100%;
      @include media(xs) {
        max-width: 112px;
        margin-top: 0px;
        margin-left: -20px;
        margin-right: 30px;
      }
    }
    .doctor-title {
      margin: 6px 8px 0;
      font-weight: bold;
      line-height: 1.33;
      text-align: left;
      color: #4b4b4b;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .custom-devider {
      position: relative;
      width: 100%;
      height: 2px;
      &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 100%;
        height: 2px;
        background: #eee;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 24px;
        left: 0;
        height: 2px;
        background: var(--v-secondary-base);
      }
    }
    .doctor-subtitle {
      padding: 0 8px;
      margin-top: 16px;
      opacity: 0.7;
      font-weight: 500;
      line-height: 1.33;
      text-align: left;
      color: #4b4b4b;
    }
  }
}
.how-to-work {
  margin-top: 90px;
  h3 {
    margin-bottom: 70px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #212121;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    @include media(xs) {
      flex-direction: column;
      .v-icon {
        transform: rotate(90deg);
        margin: 20px 0;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 16px;
        font-weight: 600;
        color: #212121;
      }
    }
  }
}
.our-experience {
  background: #f9f9f9;
  padding: 36px 0 56px;
  margin-top: 60px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #212121;
  }
  .wrapper {
    margin-top: 52px;
    display: flex;
    justify-content: space-around;
    @include media(xs) {
      flex-direction: column;
    }
    .item {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      color: #4b4b4b;
      align-items: center;
      font-size: 18px;
      @include media(xs) {
        font-weight: 500;
        + .item {
          margin-top: 40px;
        }
      }
      span {
        margin-top: 8px;
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="top-section">
      <div class="left-section">
        <h1>
          Connect to specialists remotely and through video call in
          <span>your own language</span>
        </h1>
        <p
          class="hide-md"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.</p>
      </div>
      <div class="right-section"></div>
    </div>
    <div class="doctor-list">
      <template v-if="$fetchState.pending">
        <v-skeleton-loader
          :loading="true"
          v-for="item in 5"
          :key="item"
          class="doctor-item"
          type="image,list-item-two-line, actions"
        ></v-skeleton-loader>
      </template>
      <div v-else class="doctor-item" v-for="doctor in doctors" :key="doctor.subscriberNumber">
        <div class="doctor-image">
          <v-img :src="doctor.image"></v-img>
        </div>
        <div class="doctor-info">
          <div class="doctor-title">{{doctor.firstname}} {{doctor.lastname}}</div>
          <div class="custom-devider"></div>
          <div class="doctor-subtitle">{{doctor.speciality.title}}</div>
          <v-btn
            color="secondary"
            class="text-none subtitle-1"
            outlined
            block
            :to="`/doctor/${doctor.id}`"
          >Select and Continue</v-btn>
        </div>
      </div>
    </div>
    <div class="how-to-work">
      <h3>Do It In 3 Easy Steps</h3>
      <div class="wrapper">
        <div>
          <img src="~assets/img/img_search.png" alt />
          <span>Select a specialist from the list above</span>
        </div>
        <v-icon size="52" color="#006372">la-long-arrow-alt-right</v-icon>
        <div>
          <img src="~assets/img/img_buy_credit.png" alt />
          <span>Pay with your credit card</span>
        </div>
        <v-icon size="52" color="#006372">la-long-arrow-alt-right</v-icon>
        <div>
          <img src="~assets/img/img_direct_call.png" alt />
          <span>Connect and get your problem solved</span>
        </div>
      </div>
    </div>
    <div class="our-experience">
      <h3>The Reasons To Choose Our Service</h3>
      <div class="wrapper">
        <div class="item">
          <img src="~assets/img/ic_support.png" alt />
          <span>247 Support</span>
        </div>
        <div class="item">
          <img src="~assets/img/ic_support.png" alt />
          <span>Secure Payment Gateway</span>
        </div>
        <div class="item">
          <img src="~assets/img/ic_language.png" alt />
          <span>Experts in Your Language</span>
        </div>
      </div>
    </div>
    <Comments />
    <div v-if="$fetchState.error">{{$fetchState.error}}</div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Comments from '@/components/home/comments.vue'

Component.registerHooks(['fetch'])
@Component({
  layout: 'homepage',
  components: {
    Comments
  }
})
export default class Home extends Vue {
  doctors = []
  vlazy = {
    experience: false,
    img: false
  }
  async fetch() {
    this.doctors = await this.$axios.$get('doctors')
  }
}
</script>