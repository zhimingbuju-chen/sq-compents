// 后台管理中心
export default [
  {
    path: '/chooseVideo/index',
    name: 'chooseVideo',
    meta: {
      title: '选择视频',
    },
      component: resolve => require(['@/components/chooseVideo/index'], resolve),
  },
  {
    path: '/chooseVideo/search',
    name: 'chooseVideo',
    meta: {
      title: '选择视频',
    },
    component: resolve => require(['@/components/chooseVideo/search'], resolve),
  },
  {
    path: '/chooseVideo/test',
    name: 'chooseVideo',
    meta: {
      title: '选择视频',
    },
    component: resolve => require(['@/components/chooseVideo/test'], resolve),
  },
]
