import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // 1つのURL
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
