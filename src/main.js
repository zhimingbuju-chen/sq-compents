// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vant from 'vant';
import '@/assets/css/common/base.css';
import '@/assets/css/common/icon_local.scss';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
