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
  padding-bottom: 20px;
  @include media(xs) {
    flex-direction: column;
  }
  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background: #6c6c6c;
    opacity: 0.2;
    right: 0;
    bottom: 0;
    @include media(xs) {
      display: none;
    }
  }
  &:not(:last-child):after {
    content: '';
    position: absolute;
    height: 2px;
    width: 25px;
    background: #f9a429;
    left: 0;
    bottom: 0px;
    @include media(xs) {
      display: none;
    }
  }
  div:first-child {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding-top: 16px;
    position: relative;
    @include media(xs) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      background: #6c6c6c;
      opacity: 0.2;
      right: 0;
      top: 0px;
      @include media(xs) {
        display: none;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 2px;
      height: 25px;
      background: var(--v-primary-base);
      right: 0;
      top: 0px;
      @include media(xs) {
        display: none;
      }
    }
  }
  div:last-of-type {
    padding: 16px 36px;
    font-size: 14px;
    font-weight: 500;
    line-height: 2;
    color: #4b4b4b;
    @include media(xs) {
      padding: 16px 0;
    }
  }
}
.owner {
  font-size: 14px;
  font-weight: 500;
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
      <!-- doctor.reviews -->
      <div class="comment-item" v-for="item in 4" :key="item">
        <div>
          <span class="owner">{{item.owner_name || 'Reza Ahmadi'}}</span>
          <span class="date">{{new Date() | persianDate('YYYY/MM/DD')}}</span>
        </div>
        <div>
          <p>{{item.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. '}}</p>
        </div>
        <v-divider class="hide-md-and-up"></v-divider>
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