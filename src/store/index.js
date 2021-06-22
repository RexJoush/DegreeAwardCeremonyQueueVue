/*
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-06-21 21:41:39
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-06-21 21:54:58
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import queue from './modules/queue'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    queue,
  },
  getters
})

export default store
