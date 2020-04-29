<style lang="scss" scoped>
.box {
  display: flex;
  padding: 20px 16px;
  + .box {
    margin-top: 12px;
  }
  .icon {
    display: flex;
    align-items: center;
    margin-right: 16px;
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
      margin-top: 6px;
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
        <span class="label">{{$t('accessibility')}}</span>
        <span class="value">اینو نمیدونم چیه</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/ic_save_money.png" alt />
      </span>
      <div>
        <span class="label">{{$t('save')}}</span>
        <span class="value">اینو نمیدونم چیه</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/ic_traffic.png" alt />
      </span>
      <div>
        <span class="label">{{$t('expertiseAccessibility')}}</span>
        <span class="value">%{{doctor.extra_field.speciaity_access || 0 }}</span>
      </div>
    </div>
    <div class="box">
      <span class="icon">
        <img src="~assets/img/Page-1.png" alt />
      </span>
      <div>
        <span class="label">{{$t('caltureAccessibility')}}</span>
        <span class="value">%{{doctor.extra_field.culture_access || 0 }}</span>
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