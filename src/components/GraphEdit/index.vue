<template>
  <div class="editMainContainer">
    <div class="editLegendHeader">
      <div @click="handleThumbnail" class="legendItem">
        <i class="el-icon-plus"></i>
        缩略图
      </div>
      <div class="legendItem">
        <i class="el-icon-plus"></i>
        新增
      </div>
      <div class="legendItem">
        <i class="el-icon-plus"></i>
        保存
      </div>
      <div class="legendItem">
        <span style="margin-right: 10px">拓扑选择</span>
        <el-select v-model="topoVal" placeholder="请选择" clearable size="mini">
          <el-option label="test" value="test">test</el-option>
        </el-select>
      </div>
    </div>  
    <div class="graphEditorContainer" ref="editorContainer"></div>
  </div>
</template>
<script>
import '@/styles/grapheditor.css'
export default {
  name: "GraphEdit",
  data() {
    return {
      graph: null,
      loading: false,
      topoVal: '',
    };
  },
  methods: {
    handleThumbnail() {
      this.editorUiInit.actions.get('outline').funct();
      this.editorUiInit.refresh();
    }
  },
  mounted() {
    const self = this;
    const container = this.$refs.editorContainer;
    const editorUiInit = EditorUi.prototype.init;
    const $Message = this.$message;

    EditorUi.prototype.init = function () {
      editorUiInit.apply(this, arguments);
      this.actions.get("export").setEnabled(false);    
    };

    mxResources.loadDefaultBundle = false;
    const bundle =
      mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
      mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

    mxUtils.getAll(
      [bundle, "./default.xml"],
      function (xhr) {
        // 加载汉化文件
        mxResources.parse(xhr[0].getText());
        const themes = {};
        themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement();

        // 启动
        self.editorUiInit = new EditorUi(new Editor(urlParams["chrome"] == "0", themes),container);
      },
      function () {
        $Message.error('当前浏览器不支持')
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.editMainContainer{
  position: relative;

  .editLegendHeader{
    position: absolute;
    top: 0;
    left: 400px;
    z-index: 10;
    font-size: 12px;
    height: 40px;
    display: flex;
    color: #2D3E53;
    align-items: center;
    .legendItem{
      cursor: pointer;
      margin-right: 15px;
    }
  }
}
.graphEditorContainer{
  width: 100vw;
  height: calc(100vh - 37px);
  position: relative;
}
</style>
