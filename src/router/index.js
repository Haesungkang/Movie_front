import Vue from 'vue'
import VueRouter from 'vue-router'
import Glide from '@/components/Glide'
import GlideSlide from '@/components/GlideSlide'
import CommentForm from '@/components/CommentForm'
import MovieCommentForm from '@/components/MovieCommentForm'
// import Comment from '@/components/Comment'

import Home from '../views/Home.vue'
import MovieList from '@/views/MovieList.vue'
import Recommend from '@/views/Recommend.vue'
import Community from '@/views/Community.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import TopRatedMovies from '@/views/TopRatedMovies.vue'
import TopVoteAverageMovies from '@/views/TopVoteAverageMovies.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

import ArticleDetail from '@/views/community/ArticleDetail'
import ArticleList from '@/views/community/ArticleList'
import CreateArticle from '@/views/community/CreateArticle'

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
    component: Recommend,
    props: true
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
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/detail/moviecomment',
    name: 'MovieCommentForm',
    component: MovieCommentForm
  },
  {
    path: '/top-rated-movies',
    name: 'topratedmovies',
    component: TopRatedMovies
  },
  {
    path: '/top-vote-average-movies',
    name: 'TopVoteAverageMovies',
    component: TopVoteAverageMovies
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
    path: '/articledetail',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  // {
  //   path: '/comment',
  //   name: 'Comment',
  //   component: Comment
  // },
  {
    path: '/community/createcomment',
    name: 'CommentForm',
    component: CommentForm
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