<style lang="scss" scoped>
.box {
  @include media(md) {
    position: sticky;
    top: 20px;
  }
}
.image-wrapper {
  text-align: center;
}
.doctor-name {
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}
.success-call {
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  .v-icon {
    margin-left: 6px;
  }
  span {
    margin: 0 2px;
  }
}
.doctor-info {
  ul {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      align-items: center;
      min-height: 36px;
      color: #6c6c6c;
      .v-btn {
        margin: 12px 0;
      }
    }
  }
}
.custom-btn {
  box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5) !important;
  background-image: linear-gradient(263deg, #13d1f3, #35d6c1);
  border-radius: 8px;
}
</style>
<template>
  <div class="box">
    <div class="image-wrapper">
      <v-img :src="doctor.image" alt />
    </div>
    <div class="doctor-name">
      <span>{{doctor.firstname}}</span>
      <span>{{doctor.lastname}}</span>
    </div>
    <div class="success-call">
      <img src="~assets/img/ic_call.png" alt />
      <span>{{doctor.satisfiedCalls }}</span>
      <span>{{$t('successCall')}}</span>
    </div>
    <div class="doctor-info">
      <ul>
        <li>
          <span>{{$t('speciality')}}</span>
          <span>{{doctor.speciality.title}}</span>
        </li>
        <v-divider class="my-2"></v-divider>
        <li v-if="doctor.medicalCouncilNumber">
          <span>{{$t('medicalCouncilNumber')}}</span>
          <span class="orange--text">{{doctor.medicalCouncilNumber }}</span>
        </li>
        <v-divider v-if="doctor.medicalCouncilNumber" class="my-2"></v-divider>
        <li>
          <span>{{$t('pricing')}}</span>
          <span class="orange--text">{{doctor.price * doctor.session_duration }} {{$t('currency')}}</span>
        </li>
        <li>
          <span>{{$t('sessionDuration')}}</span>
          <span>{{doctor.session_duration }} {{$t('minute')}}</span>
        </li>
        <li v-for="(workplace,index) in doctor.workplaces" :key="index">
          <span>{{$t('workplace')}}</span>
          <span>
            <a href>{{$t('show')}}</a>
          </span>
        </li>
        <li>
          <v-btn class="custom-btn" :to="$route.fullPath + '/register'" dark block>{{$t('reserve')}}</v-btn>
        </li>
        <v-divider class="my-2"></v-divider>
        <li>
          <div>
            <v-icon size="25" color="secondary">la-share-alt</v-icon>
            <span>{{$t('share')}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doctor: {
      required: true
    }
  },
  mounted() {}
}
</script>