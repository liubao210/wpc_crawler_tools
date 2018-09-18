import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myselect from '@/components/myselect'
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
      path : '/viewdata',
      name : ViewData,
      component : ViewData
    }
  ]
})
