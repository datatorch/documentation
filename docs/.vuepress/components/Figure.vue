<template>
  <div>
    <CenteredImage :src="src" :width="width" />
    <div class="caption-text">Figure {{ num }}: {{ caption }}</div>
  </div>
</template>


<script>
export default {
  name: 'Figure',
  props: {
    src: { type: String, required: true },
    width: { type: String, default: '50%' },
    caption: { type: String, default: 'No caption' }
  },
  data() {
    return { id: null }
  },
  computed: {
    figures() {
      return this.$parent.$children.filter(v => v.$options.name)
    },
    num() {
      return this.figures.findIndex(v => this.id === v.id) + 1
    }
  },
  created() {
    this.id = this._uid
  }
}
</script>

<style scoped>
.caption-text {
  margin-top: 1.5em;
  text-align: center;
  font-size: 0.85em;
}
</style>