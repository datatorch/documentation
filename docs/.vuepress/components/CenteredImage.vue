<template>
  <div>
    <img
      class="center"
      :class="{ rounded }"
      :src="src"
      :style="{ width, 'max-width': maxWidth }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    width: { type: String, default: '50%' },
    maxWidth: { type: String, default: null },
    rounded: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.rounded {
  border-radius: 0.25rem !important;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>