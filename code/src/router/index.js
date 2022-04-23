import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: () => import('../views/FrontPage-View.vue')
  },

  {
    path: '/about',
    name: 'about us',
    component: () => import( '../views/About-View.vue')
  },
 
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact-View.vue')
  },

  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('../views/Document-View.vue')
  },

  {
    path: '/installation',
    name: 'installation',
    component: () => import('../views/Installation-View.vue')
  },

  {
    path: '/features',
    name: 'features',
    component: () => import('../views/Features-View.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login-View.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register-View.vue')
  },

  {
    path: '/forgot',
    name: 'forgot',
    component: () => import( '../views/Forgot-View.vue')
  },
  
  {
    path: '/directory',
    name: 'directory',
    component: () => import('../views/Directory-View.vue')
  }
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
  }
)

export default router
