/**
 * 画布管理
 */
import { fetch, post } from '@/utils/http';

export default {
  /**
    * 获取画布列表
    * @param {name,pageNum,pageSize} params
    * @returns Object
    */
  fetchTopoList: (params) => post('/txo/topo/neinfo/query/canvas/page', params),
  /**
    * 保存画布
    * {content,name,description} params
    */
  saveTopoInfo: (params) => post('/txo/topo/neinfo/save/canvas', params),
};
