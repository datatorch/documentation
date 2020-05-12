<template>
  <div>
    <img class="center" :src="src" :style="{ width }" />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    width: { type: String, default: '50%' }
  }
}
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>