<style lang="scss" scoped>
section {
  .subtitle {
    color: #212121;
    margin-bottom: 30px;
    font-size: 13px;
  }
  .invoice {
    width: 600px;
    max-width: 90%;
  }
  .v-card {
    margin-top: 60px;
    border-radius: 8px;
    padding: 40px 30px 24px;
    @include media(xs-only) {
      padding: 24px 20px;
      margin-top: 40px;
    }
    .icon-wrapper {
      text-align: center;
      display: inline-flex;
      padding: 8px;
      position: relative;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        font-weight: bold;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border: none;
        }
        span:first-child {
          color: #6c6c6c;
          font-weight: 600;
        }
      }
    }
    .paypal-btn {
      margin-top: 24px;
      border-radius: 8px;
      background-image: linear-gradient(265deg, #13d1f3, #35d6c1);
    }
  }
}
</style>
<template>
  <section>
    <v-card class="invoice">
      <div class="text-center">
        <div class="icon-wrapper">
          <img src="~assets/img/ic_mobile_number.png" alt />
        </div>
      </div>
      <div class="subtitle text-center">
        <p>{{$t('stepper.register.title')}}</p>
      </div>
      <div>
        <v-text-field
          v-validate="'required'"
          :error-messages="errors.collect('name')"
          :data-vv-as="$t('stepper.register.input.name')"
          v-model="reservation.name"
          outlined
          name="name"
          :label="$t('stepper.register.input.name')"
        ></v-text-field>
        <v-text-field
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          :data-vv-as="$t('stepper.register.input.email')"
          v-model="reservation.email"
          outlined
          name="email"
          :label="$t('stepper.register.input.email')"
        ></v-text-field>
        <v-text-field
          v-validate="'required'"
          :error-messages="errors.collect('mobile')"
          :data-vv-as="$t('stepper.register.input.mobile')"
          v-model="reservation.mobile"
          v-fix-digit
          outlined
          name="mobile"
          :label="$t('stepper.register.input.mobile')"
        ></v-text-field>
        <v-textarea
          outlined
          no-resize
          v-model="reservation.description"
          rows="10"
          name="description"
          :label="$t('stepper.register.input.description')"
        ></v-textarea>
      </div>
      <v-btn
        class="paypal-btn text-none title"
        @click="submit"
        dark
        block
        large
      >{{$t('stepper.register.continue')}}</v-btn>
    </v-card>
    <div class="notify-text">
      <v-icon size="40" color="orange">la-info-circle</v-icon>
      <div>
        <p>Your information is secured based on GDPR.</p>
        <p>Your information is secured based on GDPR.</p>
      </div>
    </div>
    <div class="bottom-background"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import ReservationModule from '@/store/reservation'

@Component({
  layout: 'stepper'
})
export default class Register extends Vue {
  reservation = {}
  mounted() {
    this.reservation = { ...this.$store.state.reservation.info }
    console.log(this.$route)
  }
  async submit() {
    let valid = await this.$validator.validateAll()
    if (valid) {
      let Reservation = getModule(ReservationModule, this.$store)
      Reservation.save_reservation_info(this.reservation)
      this.$router.push(this.$route.fullPath.replace('register', 'time'))
    }
  }
}
</script>
