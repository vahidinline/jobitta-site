<style lang="scss" >
section#comments {
  padding: 40px 0;
  .swiper-holder {
    margin: 0 30px;
  }
  .swiper-container {
    padding: 40px 6px;
  }
  // .swiper-slide {
  //   opacity: 0.5;
  // }
  // .swiper-slide-next {
  //   opacity: 1;
  // }
  h2 {
    text-align: center;
    margin: 60px 0;
    font-size: 24px;
    font-weight: bold;
  }
  .card {
    box-shadow: 0 12px 23px -5px rgba(0, 0, 0, 0.15);
    background: #fff;
    padding: 53px 16px 40px;
    position: relative;
    font-size: 14px;
    line-height: 2;
    font-weight: 500;
    text-align: left;
    color: #6c6c6c;
    &:before {
      content: '';
      background: url(~assets/img/ic_quote.png);
      background-repeat: no-repeat;
      width: 64px;
      height: 64px;
      top: -32px;
      position: absolute;
      left: 16px;
    }
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #fff;
      position: absolute;
      bottom: -20px;
      right: 0;
      left: 0;
      margin: auto;
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
    .image-wrapper {
      border-radius: 100%;
      padding: 4px;
      border: 1px solid var(--v-primary-base);
      display: inline-flex;
      img {
        border-radius: 100%;
      }
    }
    span {
      margin-top: 4px;
      font-size: 12px;
      font-weight: bold;
      color: #212121;
    }
  }
  .swiper-pagination {
    left: 0;
    right: 0;
    margin: auto;
  }
  .swiper-pagination-bullet {
    width: 48px;
    height: 4px;
    display: inline-block;
    border-radius: 10px;
    background: #d9d9d9;
    margin: 0 4px;
  }
  .swiper-pagination-bullet-active {
    box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5);
    background-image: linear-gradient(to bottom, #13d1f3, #35d6c1);
  }
}
</style>
<template>
  <section id="comments">
    <h2>Hear From Our Customers</h2>
    <div class="carousel-wrapper">
      <div class="swiper-holder">
        <div v-swiper:mySwiperdesktop="swiperOptionDoctors">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 6" :key="item">
              <div
                class="card"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.</div>
              <div class="profile">
                <div class="image-wrapper">
                  <v-avatar>
                    <v-img :src="require('@/assets/img/user.jpg')" alt />
                  </v-avatar>
                </div>
                <span>David Jones</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
      swiperOptionDoctors: {
        spaceBetween: 24,
        // loop: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        breakpoints: {
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1
          }
        },
        grabCursor: true
      }
    }
  }
}
</script>
