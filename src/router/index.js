import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Message = () => import('@/views/Message')
const Search = () => import('@/views/Search')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Article = () => import('@/views/Article')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [

      { path: 'home', component: Home },
      { path: 'Message', component: Message },
      { path: 'Search', component: Search },
      { path: 'My', component: My, name: 'My' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/article/:article_id', component: Article, name: 'article' }
]

const router = new VueRouter({
  routes
})

export default router
