<style lang="scss" scoped>
.box {
  height: 100%;
}
ul {
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    height: 60px;
    .icon {
      display: flex;
      align-items: center;
      margin-left: 16px;
    }
    div {
      display: flex;
      flex-direction: column;
      span.label {
        font-size: 12px;
        font-weight: bold;
        color: #707070;
      }
      span.value {
        font-size: 14px;
        font-weight: bold;
        color: #212121;
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <h3 class="custom-title1">سوابق پزشک</h3>
    <ul>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_time.png" alt />
        </span>
        <div>
          <span class="label">سابقه طبابت</span>
          <span class="value">{{doctor.work_experience | persianDigit}} سال</span>
        </div>
      </li>
      <li v-if="doctor.expertise && doctor.expertise != ' '">
        <span class="icon">
          <img src="~assets/img/ic_post_specialist.png" alt />
        </span>
        <div>
          <span class="label">فوق تخصص</span>
          <span class="value">{{doctor.expertise}}</span>
        </div>
      </li>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_specialist.png" alt />
        </span>
        <div>
          <span class="label">تخصص</span>
          <span class="value">{{doctor.specialtyTitle}}</span>
        </div>
      </li>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_education.png" alt />
        </span>
        <div>
          <span class="label">سابقه علمی</span>
          <span class="value">
            <span v-for="(item,index) in doctor.aboutDoctor" :key="index">
              {{item}}
              <span v-if="index < doctor.aboutDoctor.length-1">،</span>
            </span>
          </span>
        </div>
      </li>
    </ul>
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