import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path: "/home",
    component: () => import('../views/Home/home.vue'),
  },
  {
    path: "/shopping",
    component: () => import('../views/Shopping/shopping.vue'),
  },
  {
    path: "/Classify",
    component: () => import('../views/Classify/Classify.vue'),
  },
  {
    path: "/mine",
    component: () => import('../views/Mine/mine.vue'),
  }
  // {//
  //   path: "/list",
  //   component: () => import('../views/list/list.vue'),
  // },
  // {
  //   path: "/research",
  //   component: () => import('../views/research/research.vue'),
  // },
  // {
  //   path: "/mine",
  //   component: () => import('../views/mine/mine.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
