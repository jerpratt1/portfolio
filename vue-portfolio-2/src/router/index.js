import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import ChatBot from '../views/ChatBot.vue'
import ClubsTrump from '../views/ClubsTrump.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/project',
    name: 'project',
    component: ProjectView
  },
  {
    path:'/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path:'/chatbot',
    name: 'chatbot',
    component: ChatBot
  },
  {
    path:'/clubs',
    name: 'clubs',
    component: ClubsTrump
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
