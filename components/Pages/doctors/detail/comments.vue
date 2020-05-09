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
    bottom: 0px;
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
    right: 0;
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
      left: 0;
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
      left: 0;
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
}
.date {
  margin-top: 8px;
  font-size: 10px;
  color: #6c6c6c;
}
</style>
<template>
  <section>
    <h3 class="custom-title1">نظرات مراجعین</h3>
    <div class="comments-wrapper">
      <div class="comment-item" v-for="item in doctor.reviews" :key="item">
        <div>
          <span class="owner">{{item.owner_name}}</span>
          <span class="date">در تاریخ {{item.review_at | persianDate('jYYYY/jMM/jDD')}}</span>
        </div>
        <div>
          <p>{{item.text}}</p>
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