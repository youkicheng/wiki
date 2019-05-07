import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Collection from './views/Collection.vue'
import Recommend from './views/Recommend.vue'
import HotTopic from './views/HotTopic.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      redirect: '/home/recommend',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/home/hotTopic',
          name: 'hotTopic',
          component: HotTopic
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    }
  ]
})
