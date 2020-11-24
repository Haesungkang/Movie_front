import Vue from 'vue'
import VueRouter from 'vue-router'
import Glide from '@/components/Glide'
import GlideSlide from '@/components/GlideSlide'

import Home from '../views/Home.vue'
import MovieList from '@/views/MovieList.vue'
import Recommend from '@/views/Recommend.vue'
import Community from '@/views/Community.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import TopRatedMovies from '@/views/TopRatedMovies.vue'

import ArticleList from '@/views/community/ArticleList'
import CreateArticle from '@/views/community/CreateArticle'
import CreateComment from '@/views/community/CreateComment'
import SuperheroesList from '@/views/community/SuperheroesList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie_info',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/top-rated-movies',
    name: 'topratedmovies',
    component: TopRatedMovies
  },
  {
    path: '/community/articlelist',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/community/createarticle',
    name: 'CreateArticle',
    component: CreateArticle
  },
  {
    path: '/community/createcomment',
    name: 'CreateComment',
    component: CreateComment
  },
  {
    path: '/superheroeslist',
    name: 'SuperheroesList',
    component: SuperheroesList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// export default {
//   install (Vue) {
//     Vue.component(Glide.name, Glide)
//     Vue.component(GlideSlide.name, GlideSlide)
//   }
// }

export { Glide, GlideSlide }