<template>
  <div>
    <img class="center" :src="src" :style="{ width, 'max-width': maxWidth }" />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    width: { type: String, default: '50%' },
    maxWidth: { type: String, default: null }
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