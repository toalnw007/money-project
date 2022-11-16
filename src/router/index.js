import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/authentication/login/Main.vue") ,
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/authentication/register/Main.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/home/Main.vue")
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  