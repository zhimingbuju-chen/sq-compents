import Vue from 'vue'
import Router from 'vue-router'
import chooseVide from './componentsJs';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...chooseVide, //选择VIP
  ]
})
