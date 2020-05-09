<style lang="scss" scoped>
.box {
  display: flex;
  + .box {
    margin-top: 12px;
  }
  .icon {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  div {
    display: flex;
    flex-direction: column;
    span:first-child {
      font-size: 12px;
      font-weight: bold;
      color: #707070;
    }
    span:last-child {
      font-size: 14px;
      font-weight: bold;
      color: #212121;
    }
  }
}
</style>
<template>
  <div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/ic_timer.png" alt />
      </span>
      <div>
        <span class="label">دسترسی غیرحضوری از هر مکان</span>
        <span class="value">اینو نمیدونم چیه</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/ic_save_money.png" alt />
      </span>
      <div>
        <span class="label">هزینه پایین‌تر</span>
        <span class="value">اینو نمیدونم چیه</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/ic_traffic.png" alt />
      </span>
      <div>
        <span class="label">دسترسی راحت‌تر به پزشک متخصص و فوق تخصص</span>
        <span class="value">٪{{doctor.speciaity_access || 0 | persianDigit}}</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/Page-1.png" alt />
      </span>
      <div>
        <span class="label">دسترسی به مشاور با فرهنگ و زبان فارسی</span>
        <span class="value">٪{{doctor.culture_access || 0 | persianDigit}}</span>
      </div>
    </div>
  </div>
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