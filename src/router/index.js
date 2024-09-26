import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login/LoginView.vue'
import HomeView from '../views/Home/HomeView.vue'
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
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach(async (to, from, next) => {
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
