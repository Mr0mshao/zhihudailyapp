import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home.vue'
import ThemesList from '../components/pages/themes-list.vue'
import ThemesDetail from '../components/pages/themes-detail.vue'
import About from '../components/pages/about.vue'
import Detail from '../components/pages/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  // linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  routes: [
    { path: '/',component: Home },
    { path: '/themesList',component: ThemesList },
    { path: '/about',component: About },
    { path: '/detail/:id', name:'newsdetail', component: Detail },
    { path: '/themedetail/:id', name:'themesdetail', component: ThemesDetail },
  ]
})
