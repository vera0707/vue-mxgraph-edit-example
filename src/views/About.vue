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
