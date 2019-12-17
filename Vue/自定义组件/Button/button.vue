<template>
  <!-- <div
    :class="type == 'Default'?'btn default':type == 'remove'?'btn remove':type == 'special'?'btn special':'btn default'"
  >-->
  <div :class="chooseClass">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: 'cy-Button',
  props: { type: { type: String, default: 'Default' } },
  computed: {
    chooseClass() {
      console.log(this.type)
      switch (this.type) {
        case 'remove':
          return 'btn remove'
        case 'special':
          return 'btn special';
        default: return 'btn default';
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url(./button.less);
</style>