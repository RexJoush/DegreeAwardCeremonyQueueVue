import Vue from 'vue'
import Router from 'vue-router'
import Queue from '@/views/queue/index'
import Display from '@/views/display/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Queue',
      component: Queue
    },
    {
      path: '/display',
      name: "Display",
      component: Display
    }
  ]
})
