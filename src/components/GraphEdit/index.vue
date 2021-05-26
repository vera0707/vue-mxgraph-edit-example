<template>
  <div class="graphEditorContainer">
    在这里画图
  </div>
</template>
<script>

export default {
  name: 'GraphEdit',
  data() {
    return {
      graph: null,
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style scoped>
.graphContainer{
  width: 100%;
  height: calc(100vh - 100px);
  display: block;
  min-width: 400px;
  min-height: 400px;
  background-position: -40px -40px;
  background-color: rgb(255, 255, 255);
  background-image: url('./assets/bg.svg');
}
</style>
