<template>
  <div class="editMainContainer">
    <div class="editLegendHeader">
      <div>
        <i class="el-icon-plus"></i>
        新增
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
    };
  },
  methods: {},
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
  }
}
.graphEditorContainer{
  width: 100vw;
  height: calc(100vh - 37px);
  position: relative;
}
</style>
