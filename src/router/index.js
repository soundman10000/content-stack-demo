import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login/LoginView.vue'
import IndexView from '../views/Index/IndexView.vue'
import { homeRoutes } from './home.js'
import { userStore } from 'userStore'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      beforeEnter: (_, __, next) => {
        sessionStorage.clear();
        next();
      }
    },
    {
      path: '/home',
      name: 'index',
      component: IndexView,
      children: homeRoutes
    },
  ]
})

router.beforeEach(async (to, _, next) => {
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const auth = userStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    next('/');
  } else {
    next();
  }
});

export default router
