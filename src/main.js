/*
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-06-21 20:12:44
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-06-21 21:57:12
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 使用 vuex
import store from './store'
import router from './router'

// 引入 axios
import axios from 'axios';

// 引入 element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { locale });
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
