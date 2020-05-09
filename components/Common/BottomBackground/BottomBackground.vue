<style lang="scss" scoped>
.bottom-background {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(270deg, #13d1f3, #35d6c1);
  clip-path: ellipse(200% 100% at 50% 100%);
  z-index: -1;
  @include media(sm) {
    clip-path: ellipse(100% 100% at 50% 100%);
  }
}
</style>

<template>
  <div class="bottom-background"></div>
</template>

<script>
export default {}
</script>
