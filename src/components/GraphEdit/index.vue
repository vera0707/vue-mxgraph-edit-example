<template>
  <div class="editMainContainer">
    <div class="editLegendHeader">
      <div @click="handleThumbnail" class="legendItem">
        <i class="el-icon-coordinate"></i>
        缩略图
      </div>
      <div class="legendItem">
        <img src="~@/assets/add.svg" width="10" alt="" />
        新增
      </div>
      <div class="legendItem" @click="saveCurrentTopo = true">
        <img src="~@/assets/save.svg" width="10" alt="" />
        保存
      </div>
      <div class="legendItem" @click="openNewTopo">
        <i class="el-icon-folder-opened"></i>
        打开
      </div>
      <div class="legendItem" @click="openEditCellDialog">
        <i class="el-icon-edit"></i>
        编辑数据
      </div>
      <div class="legendItem">
        <span style="margin-right: 10px">拓扑选择</span>
        <el-select v-model="topoVal" placeholder="请选择" clearable size="mini">
          <el-option label="test" value="test">test</el-option>
        </el-select>
      </div>
    </div>
    <div class="graphEditorContainer" ref="editorContainer"></div>
    <EditCellProperty
      :isVisible="cellProperty"
      :detailData="cellData"
      v-on:onDialogClose="
        cellProperty = false;
        cellData = {};
      "
      v-on:onDialogConfirm="saveActiveCell"
    />
    <SaveTopology
      :isVisible="saveCurrentTopo"
      v-on:onDialogClose="
        saveCurrentTopo = false;
      "
      v-on:onDialogConfirm="saveTopology"
    />
  </div>
</template>
<script>
import SaveTopology from "@/components/SaveTopology";
import EditCellProperty from "@/components/EditCellProperty";

import "@/styles/grapheditor.css";
export default {
  name: "GraphEdit",
  components: {
    SaveTopology,
    EditCellProperty,
  },
  data() {
    return {
      graph: null,
      editorUiInit: false,
      topoVal: "",
      saveCurrentTopo: false,
      cellProperty: false,
      cellData: {},
    };
  },
  methods: {
    handleThumbnail() {
      this.editorUiInit.actions.get("outline").funct();
      this.editorUiInit.refresh();
    },
    downloadFile(filename, text){
      const element = document.createElement('a');
      element.setAttribute('href', 'data:application/xml;charset=utf-8,' + text);
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    saveTopology({name}){
      const graphXml = this.editorUiInit.editor.getGraphXml();
      const xmlObject = (new XMLSerializer()).serializeToString(graphXml);
      this.downloadFile(`${name}.xml`,xmlObject)
      this.saveCurrentTopo = false;
    },
    saveActiveCell(cellProperty) {
      const { cell} = this.cellData;
      var doc = mxUtils.createXmlDocument();
      var obj = doc.createElement('object');
      Object.keys(cellProperty).forEach(v=>{
        obj.setAttribute(v,cellProperty[v]);
      })
      this.editorUiInit.editor.graph.getModel().setValue(cell, obj);
      this.cellProperty = false;
      this.cellData = {};
    },
    openEditCellDialog() {
      const graph = this.editorUiInit.editor.graph;
      const cell = graph.getSelectionCell();
      const value = graph.getModel().getValue(cell);
      if(!cell) {
        this.$message.warning("请先选择组件");
        return;
      }
      this.cellProperty = true;
      this.cellData = {cell,value};
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
      this.actions.addAction(
        "editData",
        function () {
          self.openEditCellDialog();
        },
        null,
        null,
        "Cmd+M"
      );
    };

    mxResources.loadDefaultBundle = false;
    const bundle =
      mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
      mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

    mxUtils.getAll(
      [bundle, "/resources/default.xml"],
      (xhr) => {
        // 加载汉化文件
        mxResources.parse(xhr[0].getText());
        const themes = {};
        themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement();

        // 启动
        this.editorUiInit = new EditorUi(
          new Editor(urlParams["chrome"] == "0", themes),
          container
        );
      },
      () => {
        $Message.error("当前浏览器不支持");
      }
    );
  },
};
</script>
<style lang="scss" scoped>
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
