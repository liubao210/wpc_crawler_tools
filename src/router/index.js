import Vue from 'vue'
import Router from 'vue-router'
import ViewData from '@/components/ViewData'
import recall from '@/components/CrawlerRecall'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     //   path: '/',
    //     //   name: 'HelloWorld',
    //     //   component: HelloWorld
    //     // },
    {
      path : '/',
      name : recall,
      component : recall
    },
    {
      path : '/ViewData',
      name : ViewData,
      component : ViewData
    }
  ]
})
