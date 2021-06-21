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
export default {
  name: 'HelloWorld',
  data() {
    return {
      dialogVisible: true,
      graph: null,
    };
  },
  components: {},
  mounted() {
    this.graph = new window.mxGraph(this.$refs.graphContainer);
  },
  methods: {
    onUploadChange(file) {
      if (file.status === 'ready') return;
      if (file && file.raw) {
        const reader = new FileReader();
        reader.readAsText(file.raw);
        reader.onload = () => {
          // this.parsmXml(reader.result);
          this.test(reader.result);
        };
        this.dialogVisible = false;
      } else this.$message.error('文件解析失败');
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
      // console.log(doc.documentElement, );
      // var dec = new mxCodec(node.ownerDocument);
      // this.editor.setGraphXml(doc.documentElement);
      // this.editor.setModified(false);
      // this.editor.undoManager.clear()
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
</style>
