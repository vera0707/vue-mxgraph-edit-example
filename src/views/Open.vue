<template>
<div class="open">
  <el-button
    class="open-button"
    type="primary"
    @click="importFile = true"
  >导入文件</el-button>
  <div class="edit-content">
    <GraphEdit
      :enableEditing="false"
      @onInitEditGraph="initEditGraph"
    />
  </div>
  <ImportFile
      :isVisible="importFile"
      v-on:onDialogClose="importFile = false"
      v-on:onDialogConfirm="parseXmlFile"
    />
</div>
</template>
<script>
import '@/styles/grapheditor.css';
import GraphEdit from '@/components/GraphEdit/index.vue';
import ImportFile from "@/components/ImportFile";

export default {
  name: 'HelloWorld',
  components:{
    GraphEdit,
    ImportFile
  },
  data() {
    return {
      importFile: false,
    };
  },
  created(){
    this.bindEvents();
  },
  methods: {
    initEditGraph(editorUiInit){
      this.editorUiInit = editorUiInit;
    },
    parseXmlFile(xml){
      const doc = window.mxUtils.parseXml(xml);
      this.editorUiInit.editor.graph.setSelectionCells(
        this.editorUiInit.editor.graph.importGraphModel(doc.documentElement)
      );
      this.importFile = false;
    },
    bindEvents(){
      document.oncontextmenu=(event)=>{
        event.returnValue=false;
      }; 
      // document.body.contextmenu = (e)=>{
      //   e.preventDefault();
      //   e.stopPropagation();
      // }
    }
  },
};
</script>

<style scoped lang="scss" scope>
.open{
  width: 100%;
  height: 100%;
  background: #f9f9f9;
}
.open-button{
  position: fixed;
  left: 5%;
  top: 10px;
}
.edit-content{
  width: 90%;
  height: 600px;
  border: 2px solid #d7dee4;
  margin: 70px auto 0;
  border-radius: 4px;
}
::v-deep{
  .geSidebarContainer{
    display: none;
  }
  .geToolbarContainer{
    display: none;
  }
  .geDiagramContainer{
    inset: 0 !important;
  }
  .geHsplit{
    display: none;
  }
}
</style>