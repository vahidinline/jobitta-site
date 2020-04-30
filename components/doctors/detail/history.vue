<style lang="scss" scoped>
.box {
  height: 100%;
  flex-direction: column;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  li {
    display: flex;
    align-items: center;
    min-height: 60px;
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
    <h3 class="custom-title1">{{$t('professionalInformation')}}</h3>
    <ul>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_time.png" alt />
        </span>
        <div>
          <span class="label">{{$t('experience')}}</span>
          <span class="value">{{doctor.work_experience }} {{$t('years')}}</span>
        </div>
      </li>
      <li v-if="doctor.expertise && doctor.expertise != ' '">
        <span class="icon">
          <img src="~assets/img/ic_post_specialist.png" alt />
        </span>
        <div>
          <span class="label">{{$t('expertise')}}</span>
          <span class="value">{{doctor.expertise}}</span>
        </div>
      </li>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_specialist.png" alt />
        </span>
        <div>
          <span class="label">{{$t('speciality')}}</span>
          <span class="value">{{doctor.speciality.title}}</span>
        </div>
      </li>
      <li>
        <span class="icon">
          <img src="~assets/img/ic_education.png" alt />
        </span>
        <div>
          <span class="label">{{$t('Scientific Background')}}</span>
          <span class="value">{{doctor.about}}</span>
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