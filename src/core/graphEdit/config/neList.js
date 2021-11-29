// 核心网
var core1 = ['AMF', 'AUSF', 'HSS', 'MME', 'NEF', 'NRF', 'NSSF', 'PCF', 'PCRF', 'PGW', 'SGW', 'SMF', 'UDM', 'UPF'];
var core2 = ['AMF', 'AUSF', 'HSS', 'MME', 'NEF', 'NRF', 'NSSF', 'PCF', 'PCRF', 'PGW', 'SGW', 'SMF', 'UDM', 'UDR', 'UPF'];

// 无线网
var wireless1 = ['AAR', 'gNB'];
var wireless2 = ['AAU', 'gNB'];

// 传输网
var transmission1 = ['SDH', 'PON', 'PTN', 'OTN', 'IPRAN', 'SPN', 'ODN'];
var transmission2 = ['OLT', 'ONU', 'IPRAN', 'NET', 'ODN', 'ONT', 'OTN', 'PTN', 'SDH', 'SPN', 'WDM', 'ONT', 'MDU', 'ODF']
var transmission3 = [
  { iconName: 'light_amplifier_3', title: '光放大器', fileType: 'svg' },
  { iconName: 'unidirectional_amplifier_3', title: '单向放大器', fileType: 'svg' },
  { iconName: 'two_way_amplifier_3', title: '双向放大器', fileType: 'svg' },
  { iconName: 'combiner_3', title: '合路器', fileType: 'svg' },
  { iconName: 'splitter_3', title: '分光器/合波器', fileType: 'svg' },
  { iconName: 'access_node_3', title: 'Access node', fileType: 'svg' },
]

// 数据网
var data = [
  { iconName: 'switch_3', title: '交换机', fileType: 'svg' },
  { iconName: 'EBRAS_3', title: 'EBRAS', fileType: 'svg' },
  { iconName: 'router_3', title: '路由器', fileType: 'svg' }
]

// 其他组件
var others = [
  { iconName: 'operator', title: '操作员' },
  { iconName: 'computer', title: '电脑' },
  { iconName: 'firewall', title: '防护墙' },
  { iconName: 'server', title: '服务器' },
  { iconName: 'user', title: '用户' },
  { iconName: 'client', title: '客户' },
  { iconName: 'pad', title: 'pad' },
  { iconName: 'phone', title: '手机' },
  { iconName: 'lightning', title: '闪电' },
  { iconName: 'lightning1', title: '闪电' },
  { iconName: 'lightning2', title: '闪电' },
  { iconName: 'customer', title: '客户群' },
  { iconName: 'ac_power', title: '交流电源' },
  { iconName: 'operator_3', title: '操作员' },
  { iconName: 'computer_3', title: '电脑' },
  { iconName: 'firewall_3', title: '防护墙' },
  { iconName: 'server_3', title: '服务器' },
  { iconName: 'user_3', title: '用户' },
  { iconName: 'client_3', title: '客户' },
  { iconName: 'pad_3', title: 'pad' },
  { iconName: 'phone_3', title: '手机' },
  { iconName: 'customer_3', title: '客户群' },
  { iconName: 'government_3', title: '政企业务编排' },
  { iconName: 'oss_3', title: '故障管理中心' },
  { iconName: 'maintenance_3', title: '运维管理中心' },
  { iconName: 'performance_3', title: '性能管理中心' },
  { iconName: 'business_3', title: '业务编排中心' },
  { iconName: 'nsmf', title: 'NSMF', fileType: 'png' },
  { iconName: 'webcam_3', title: '摄像头' },
  { iconName: 'soft_water_3', title: '软水准仪' },
  { iconName: 'hard_water_3', title: '硬水准仪' },
  { iconName: 'media_server', title: '流媒体服务器', fileType: 'png' },
  { iconName: 'avg_car_3', title: 'AGV小车' },
  { iconName: 'gps_position_3', title: 'GPS定位' },
];
window.sidebarNeList = {
  coreNetwork: [
    ...core1.map(v => ({ iconName: v, title: v, fileType: 'svg' })),
    ...core2.map(v => ({ iconName: v + '_3', title: v, fileType: 'svg' })),
  ],
  transmissionNework: [
    ...transmission1.map(v => ({ iconName: v, title: v, fileType: 'svg' })),
    ...transmission2.map(v => ({ iconName: v + '_3', title: v, fileType: 'svg' })),
    ...transmission3,
  ],
  wirelessNework: [
    ...wireless1.map(v => ({ iconName: v, title: v, fileType: 'svg' })),
    ...wireless2.map(v => ({ iconName: v + '_3', title: v, fileType: 'svg' }))
  ],
  dataNetwork: data,
  others
}