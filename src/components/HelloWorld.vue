<template>
  <div>
    Hello World
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 27px;
  line-height: 24px;
  color: #475669;
  border-bottom: 1px solid #ccd5e0;
  padding: 3px 8px;
  padding-top: 0px;
  margin-top: 3px;
  overflow: hidden;
  font-size: 12px;
}
</style>
