<template>
  <div>
    <div class="header">在线拓扑显示中心</div>
    <el-dialog
      title="导入文件"
      :model-value="dialogVisible"
      width="400px"
      :before-close="handleClose"
    >
      <el-upload
        action="#"
        accept=".xml"
        :show-file-list="false"
        :on-change="onUploadChange"
        style="display: inline-block"
      >
        <el-button
          class="obutton ml10"
          size="mini"
          icon="el-icon-download"
          plain
          >导入</el-button>
      </el-upload>
    </el-dialog>
    <div ref="graphContainer"></div>
  </div>
</template>
<script>
import '@/styles/grapheditor.css';

export default {
  name: 'HelloWorld',
  data() {
    return {
      dialogVisible: true,
      graph: null,
    };
  },
  mounted() {
    const $Message = this.$message;
    const container = this.$refs.graphContainer;

    mxResources.loadDefaultBundle = false;
    const bundle = mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage)
      || mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

    mxUtils.getAll(
      [bundle, '/resources/default.xml'],
      (xhr) => {
        // 加载汉化文件
        mxResources.parse(xhr[0].getText());
        const themes = {};
        themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement();

        this.editorUiInit = new EditorUi(
          new Editor(urlParams.chrome == '0', themes),
          container,
        );
      },
      () => {
        $Message.error('当前浏览器不支持');
      },
    );
  },

  methods: {
    onUploadChange(file) {
      if (file.status === 'ready') return;
      if (file && file.raw) {
        const reader = new FileReader();
        reader.readAsText(file.raw);
        reader.onload = () => {
          this.openEdit(reader.result);
          // this.parsmXml(reader.result);
          // this.test(reader.result);
        };
        this.dialogVisible = false;
      } else this.$message.error('文件解析失败');
    },
    openEdit(xml) {
      const doc = window.mxUtils.parseXml(xml);
      this.editorUiInit.editor.graph.setSelectionCells(this.editorUiInit.editor.graph.importGraphModel(doc.documentElement));
    },
    test(xml) {
      const doc = window.mxUtils.parseXml(xml);
      const node = doc.documentElement;
      const dec = new mxCodec(node.ownerDocument);

      this.graph.model.beginUpdate();
      try {
        this.graph.model.clear();
        this.graph.view.scale = 1;
        // this.readGraphState(node);
        this.graph.view.validateBackground();
        this.graph.container.style.overflow = 'auto';
        dec.decode(node, this.graph.getModel());
      } finally {
        this.graph.model.endUpdate();
      }
    },
    parsmXml(xmlStr) {
      const xmlDocument = window.mxUtils.parseXml(xmlStr);
      const container = this.$refs.graphContainer;
      if (xmlDocument.documentElement != null && xmlDocument.documentElement.nodeName === 'mxGraphModel') {
        const decoder = new mxCodec(xmlDocument);
        const node = xmlDocument.documentElement;
        // 置空DOM结点文本
        container.innerHTML = '';
        const graph = new mxGraph(container);
        graph.centerZoom = false;
        // 是否使用工具提示
        graph.setTooltips(false);
        // 是否启用事件
        graph.setEnabled(true);

        // 禁止鼠标左键操作图
        graph.panningHandler.useLeftButtonForPanning = true;
        graph.panningHandler.ignoreCell = true;
        graph.container.style.cursor = 'move';

        // 是否启动平移
        graph.setPanning(true);
        graph.resizeContainer = false;
        decoder.decode(node, graph.getModel());
        graph.resizeContainer = false;
      } else this.$message.error('解析失败');
    },
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
.geDiagramContainer{
  width: 100%;
  height: calc(100vh - 30px);
  border: 1px solid red;
}
.editMainContainer {
  position: relative;

  .editLegendHeader {
    position: absolute;
    top: 0;
    left: 350px;
    z-index: 10;
    font-size: 12px;
    height: 40px;
    display: flex;
    color: #2d3e53;
    align-items: center;
    .legendItem {
      cursor: pointer;
      margin-right: 15px;

      &.disable{
        opacity: 0.2;
      }
    }
  }
}
.graphEditorContainer {
  width: 100%;
  height: calc(100vh - 37px);
  position: relative;
  overflow: hidden;
}
</style>
