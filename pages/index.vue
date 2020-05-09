<style lang="scss" scoped>
@function calcPading($items) {
  @return calc((100% - #{300 * $items}px - #{32 * $items}px) / 2);
}
.top-section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(-45deg, #adebfb, #fff);
  @include media(sm) {
    flex-direction: row;
  }
  .left-section {
    width: 100%;
    margin-top: 90px;
    max-width: 90%;
    margin-left: 30px;
    @include media(md) {
      margin-top: 130px;
      width: 530px;
    }
    @include media(xl) {
      margin-top: 130px;
      width: 760px;
    }
    h1 {
      font-size: 19px;
      line-height: 38px;
      font-weight: 600;
      @include media(sm) {
        font-size: 25px;
        line-height: 32px;
      }
      @include media(xl) {
        font-size: 52px;
        line-height: 56px;
      }
      span {
        color: var(--v-primary-base);
        position: relative;
        display: inline-block;
        font-size: 25px;
        // &:before {
        //   content: '';
        //   width: 100%;
        //   background-color: var(--v-primary-base);
        //   box-shadow: 0 2px 8px 0 rgba(var(--v-primary-base), 0.5);
        //   position: absolute;
        //   height: 4px;
        //   top: 100%;
        //   border-radius: 10px;
        // }
      }
    }
    ul {
      margin: 0;
      margin-top: 24px;
      list-style-type: none;
      padding: 0;
      li {
        color: #000;
        font-size: 15px;
        line-height: 24px;
        text-align: left;
        display: flex;
        align-items: flex-start;
        margin: 8px 0;
        color: var(--v-primary-darken4);
        @include media(xl) {
          margin: 18px 0;
          font-size: 21px;
        }
        .v-icon {
          margin-right: 8px;
          color: var(--v-primary-darken4);
        }
      }
    }
  }
  // .right-section {
  //   background-image: url(~assets/img/img_header@2x.png);
  //   height: 730px;
  //   width: calc(100% - 560px);
  //   background-position: -10px 45px;
  //   background-size: 125%;

  //   @include media(md) {
  //     background-position: -10px 175px;
  //   }
  //   @include media(sm) {
  //     background-image: url(~assets/img/img_header.png);
  //     width: 100%;
  //     background-position: 0px -10px;
  //     height: 520px;
  //   }
  // }
  .right-section {
    background-image: url(~assets/img/img_header.png);
    width: 100%;
    background-position: 0px -10px;
    height: 520px;
    background-size: 125%;

    @include media(md) {
      background-image: url(~assets/img/img_header@2x.png);
      height: 730px;
      width: calc(100% - 560px);
      background-position: -8px 145px;
    }
    @include media(lg) {
      background-position: -10px -35px;
    }
    @include media(xl) {
      background-position: 190px -35px;
      width: calc(100% - 790px);
      background-size: 100%;
    }
  }
}
.doctor-list {
  display: flex;
  flex-wrap: wrap;
  margin: -320px auto 0;
  width: 100%;
  @include media(sm) {
    margin: -220px 0 0;
    padding: 0 calcPading(2);
  }
  @include media(md) {
    margin: -320px 0 0;
    padding: 0 calcPading(3);
  }
  @include media(lg) {
    padding: 0 calcPading(4);
  }
  @include media(xl) {
    padding: 0 calcPading(5);
    margin: -200px auto 0;
  }
  .doctor-item {
    background: #fff;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    width: calc(100% - 32px);
    flex: 0 0 calc(100% - 32px);
    flex-direction: row;
    height: auto;
    margin: 5px 16px;
    @include media(sm) {
      flex-direction: column;
      width: 300px;
      flex: 0 0 300px;
      height: 400px;
      margin: 16px;
    }
    @include media(lg) {
      // width: 190px;
      // flex: 0 0 190px;
      // height: 295px;
    }
    .doctor-info {
      display: flex;
      font-size: 14px;
      flex-direction: column;
      width: calc(100% - 120px);
      // flex: 1;
      @include media(sm) {
        width: 100%;
      }
      .v-btn {
        margin-bottom: 0;
        margin-top: 20px;
        @include media(md) {
          margin-top: 16px;
        }
      }
    }
    .doctor-image {
      max-width: 112px;
      margin-top: 0px;
      margin-left: -20px;
      margin-right: 20px;

      @include media(sm) {
        flex: 1;
        height: 100%;
        max-width: 100%;
        margin-top: -20px;
        margin-right: 0px;
        margin-left: 0px;
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
      @include media(xl) {
      }
      a {
        color: inherit;
      }
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
    flex-direction: column;
    margin: 0 30px;
    @include media(md) {
      flex-direction: row;
    }
    .v-icon {
      transform: rotate(90deg);
      margin: 20px 0;
      @include media(md) {
        transform: none;
        margin: 0;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      flex: 0 0 100%;
      @include media(md) {
        width: 25%;
        flex: 0 0 25%;
      }
      img {
        max-width: 100%;
      }
      h4 {
        font-size: 18px;
        font-weight: 600;
        color: #212121;
        margin-bottom: 8px;
        @include media(xl) {
          font-size: 23px;
        }
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
    flex-direction: column;
    justify-content: space-around;
    @include media(md) {
      flex-direction: row;
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      flex: 0 0 100%;
      padding: 0 16px;
      + .item {
        margin-top: 40px;
        @include media(md) {
          margin-top: 0;
        }
      }
      @include media(md) {
        width: 33.333%;
        flex: 0 0 33.333%;
      }
      h4 {
        font-weight: 500;
        color: #4b4b4b;
        font-size: 18px;
        margin-bottom: 8px;
        @include media(md) {
          font-weight: bold;
        }
        @include media(xl) {
          font-size: 23px;
        }
      }
      span {
        margin-top: 8px;
      }
    }
  }
}
p {
  @include media(xl) {
    font-size: 1.375rem;
  }
}
</style>
<template>
  <section>
    <div class="top-section">
      <div class="left-section">
        <h1>
          Video consultation with experts in your native language
          <span>Türkçe, فارسی, عربی, हिन्दी, اُردُو</span>
        </h1>
        <ul class="hide-md">
          <li>
            <v-icon>la-dot-circle</v-icon>Psychotherapy counselling: stress, anxiety, family, marriage, divorce…
          </li>
          <li>
            <v-icon>la-dot-circle</v-icon>Health and wellbeing consultations
          </li>
          <li>
            <v-icon>la-dot-circle</v-icon>Weight loss, diet and nutrition therapists
          </li>
          <li>
            <v-icon>la-dot-circle</v-icon>Ancient arts, literature, poetry and traditional music tutoring
          </li>
          <li>
            <v-icon>la-dot-circle</v-icon>Personal and professional development coaching
          </li>
        </ul>
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
          <nuxt-link :to="`/doctors/${doctor.id}`">
            <v-img :src="doctor.image"></v-img>
          </nuxt-link>
        </div>
        <div class="doctor-info">
          <div class="doctor-title">
            <nuxt-link :to="`/doctors/${doctor.id}`">{{doctor.firstname}} {{doctor.lastname}}</nuxt-link>
          </div>
          <div class="custom-devider"></div>
          <div class="doctor-subtitle">{{doctor.speciality.title}}</div>
          <v-btn
            color="secondary"
            class="text-none subtitle-1"
            outlined
            block
            :to="`/doctors/${doctor.id}`"
          >Select and Continue</v-btn>
        </div>
      </div>
    </div>
    <div class="how-to-work">
      <h3>How it works</h3>
      <div class="wrapper">
        <div class="item">
          <img :src="require('@/assets/img/img_search.png')" alt />
          <h4>Browse Experts</h4>
          <p>
            Search our range of high quality vetted experts. Choose an expert who is right for the issue you have at hand.
            Make your selection based on expertise, years of experience, background information, native language, price, and duration of video consultation.
          </p>
        </div>
        <v-icon size="52" color="#006372">la-long-arrow-alt-right</v-icon>
        <div class="item">
          <img :src="require('@/assets/img/img_buy_credit.png')" alt />
          <h4>Book and Pay</h4>
          <p>
            Consultations are available 7 days a week. Select a session at a time and price that suits you.
            Make payment with your debit/credit card via a secure payment gateway.
            If you are not satisfied with your first consultation, we will arrange a session with an alternative expert in the same field of your query, free of charge.
          </p>
        </div>
        <v-icon size="52" color="#006372">la-long-arrow-alt-right</v-icon>
        <div class="item">
          <img :src="require('@/assets/img/img_direct_call.png')" alt />
          <h4>Connect with Expert</h4>
          <p>
            Once you have made the booking, you will receive an email confirmation with a link to your online video consultation. You will also receive a reminder text message 2 hours before your timetabled consultation.
            You will have a secure personal dashboard on the Expertgap platform, where you can update your details, complete relevant questionnaires if recommended prior to the consultation, and upload documents for the attention of your expert.
            Leave feedback after your session.
          </p>
        </div>
      </div>
    </div>
    <div class="our-experience">
      <h3>Why choose Expertgap</h3>
      <div class="wrapper">
        <div class="item">
          <img src="~assets/img/ic_support.png" alt />
          <h4>Cost effective, high quality Experts</h4>
          <p>Affordable prices for qualified and experienced Experts, with background and qualifications checked and verified.</p>
        </div>
        <div class="item">
          <img src="~assets/img/ic_support.png" alt />
          <h4>Convenience of your own home and native language</h4>
          <p>
            Highly accessible online video consultations, with the added benefit of sessions in your native language with experts from your ethnic and cultural background.
            Experts available or joining soon in a range of expertise, speaking the following languages:
            <br />Türkçe, فارسی, عربی, हिन्दी, اُردُو
          </p>
        </div>
        <div class="item">
          <img src="~assets/img/ic_language.png" alt />
          <h4>Easy to use and Reliable</h4>
          <p>Find an Expert in minutes and book your consultation in three easy steps. Reliable data encryption on private servers and secure payments by trusted and regulated financial services partner.</p>
        </div>
      </div>
    </div>
    <!-- <Comments /> -->
    <!-- <div v-if="$fetchState.error">{{$fetchState.error}}</div> -->
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Comments from '@/components/Pages/home/comments.vue'

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