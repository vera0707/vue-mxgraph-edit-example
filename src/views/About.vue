<template>
  <div>
    <div class="header">在线拓扑编辑中心</div>
    <GraphEdit />
  </div>
</template>

<script>
import GraphEdit from '@/components/GraphEdit';

export default {
  name: 'HelloWorld',
  components: {
    GraphEdit,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 30px;
  line-height: 30px;
  color: #475669;
  border-bottom: 1px solid #ccd5e0;
  padding: 0px 8px;
  overflow: hidden;
  font-size: 12px;
}
</style>
