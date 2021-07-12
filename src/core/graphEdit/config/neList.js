// 核心网
var core1 = ['AUSF','HSS','MME','NEF','PCRF','PGW','SGW'];
var core2 = ['AMF','NRF','NSSF','PCF','SMF','UDM','UDR','UPF'];

// 无线网
var wireless = ['AAU','gNB'];

// 传输网
var transmission1 = ['SDH','PON','PTN','OTN','IPRAN','SPN','ODN','ONT'];
var transmission2 = ['OLT','ONU']
// 数据网
var data = [
  { iconName: 'switch',title: '交换机',fileType:'png' },
  { iconName: 'EBRAS',title: 'EBRAS', fileType: 'png' },
  { iconName: 'router',title: '路由器', fileType: 'png' }
]

// 其他组件
var others = [
  {iconName: 'operator',title: '操作员'},
  {iconName: 'computer',title: '电脑'},
  {iconName:'firewall',title: '防护墙'},
  {iconName: 'server',title: '服务器'},
  {iconName: 'user',title: '用户'},
  {iconName: 'client',title: '客户'},
  {iconName: 'pad',title: 'pad'},
  {iconName: 'phone',title: '手机'},
  {iconName: 'lightning',title: '闪电'},
  {iconName: 'customer',title: '客户群'},
  {iconName: 'government',title:'政企业务编排', fileType: 'png' },
  {iconName: 'oss',title:'故障管理中心', fileType: 'png' },
  {iconName: 'maintenance',title:'运维管理中心', fileType: 'png' },
  {iconName: 'performance',title:'性能管理中心', fileType: 'png' },
  {iconName: 'business',title:'业务编排中心', fileType: 'png' },
  {iconName: 'nsmf',title:'NSMF', fileType: 'png' },
  {iconName: 'webcam',title:'摄像头', fileType: 'png' },
  {iconName: 'soft_water',title:'软水准仪', fileType: 'png' },
  {iconName: 'hard_water',title:'硬水准仪', fileType: 'png' },
  {iconName: 'media_server',title:'流媒体服务器', fileType: 'png' },
];
window.sidebarNeList =  {
  coreNetwork: [
    ...core1.map(v=>({iconName: v, title: v, fileType: 'svg'})),
    ...core2.map(v=>({iconName: v, title: v, fileType: 'png'}))
  ],
  transmissionNework: [
    ...transmission1.map(v=>({iconName: v, title: v, fileType: 'svg'})),
    ...transmission2.map(v=>({iconName: v, title: v, fileType: 'png'})),
  ],
  wirelessNework: wireless.map(v=>({iconName: v, title: v, fileType: 'png'})),
  dataNetwork: data,
  others
}