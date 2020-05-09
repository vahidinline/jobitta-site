<style lang="scss" scoped>
.comments-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}
.comment-item {
  display: flex;
  margin: 10px 0;
  position: relative;
  padding-bottom: 0px;
  flex-direction: column;
  @include media(md) {
    padding-bottom: 20px;
    flex-direction: row;
  }
  &:not(:last-child):before {
    @include media(md) {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background: #6c6c6c;
      opacity: 0.2;
      right: 0;
      bottom: 0;
      @include rtl() {
        right: auto;
        left: 0;
      }
    }
  }
  &:not(:last-child):after {
    @include media(md) {
      content: '';
      position: absolute;
      height: 2px;
      width: 25px;
      background: #f9a429;
      left: 0;
      bottom: 0px;
      @include rtl() {
        left: auto;
        right: 0;
      }
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    @include media(md) {
      flex-direction: row;
    }
  }
  div.left-side {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @include media(md) {
      padding-top: 16px;
      flex-direction: column;
      justify-content: flex-start;
      width: 200px;
    }
    &::before {
      @include media(md) {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background: #6c6c6c;
        opacity: 0.2;
        right: 0;
        top: 0px;
        @include rtl() {
          right: auto;
          left: 0;
        }
      }
    }
    &:after {
      @include media(md) {
        content: '';
        position: absolute;
        width: 2px;
        height: 25px;
        background: var(--v-primary-base);
        right: 0;
        top: 0px;
        @include rtl() {
          right: auto;
          left: 0;
        }
      }
    }
  }
  div.right-side {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 2;
    color: #4b4b4b;
    @include media(md) {
      padding: 16px 36px;
    }
  }
}
.owner {
  font-size: 14px;
  font-weight: 600;
  color: #212121;
  width: 150px;
}
.date {
  margin-top: 8px;
  font-size: 10px;
  color: #6c6c6c;
}
</style>
<template>
  <section>
    <h3 class="custom-title1">{{$t('reviews')}}</h3>
    <div class="comments-wrapper">
      <!--  -->
      <div class="comment-item" v-for="item in doctor.reviews" :key="item">
        <div>
          <div class="left-side">
            <span class="owner">{{item.owner_name || 'Reza Ahmadi'}}</span>
            <span
              class="date"
              v-if="$i18n.locale == 'en'"
            >{{new Date() | persianDate('YYYY/MM/DD','en')}}</span>
            <span
              class="date"
              v-if="$i18n.locale == 'fa'"
            >{{new Date() | persianDate('jYYYY/jMM/jDD') | persianDigit}}</span>
          </div>
          <div class="right-side">
            <p>{{item.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. '}}</p>
          </div>
        </div>
        <v-divider class="d-flex d-sm-none"></v-divider>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    doctor: {
      required: true
    }
  }
}
</script>