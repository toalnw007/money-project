import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../layout/Main.vue"),
        children: [
            {
                path: "/",
                name: "dashboard",
                component: () => import("../views/dashboard/Main.vue")
            },
            {
                path: "/filemanager",
                name: "filemanager",
                component: () => import("../views/filemanager/Main.vue")
            },
            {
                path: "/courselevelup",
                name: "courselevelup",
                component: () => import("../views/courselevelup/Main.vue")
            },
            {
                path: "/airobottrade",
                name: "airobottrade",
                component: () => import("../views/airobottrade/Main.vue")
            },
            {
                path: "/saminar",
                name: "saminar",
                component: () => import("../views/saminar/Main.vue")
            },
            {
                path: "/timeline",
                name: "timeline",
                component: () => import("../views/timeline/Main.vue")
            },
            {
                path: "/faq",
                name: "faq",
                component: () => import("../views/faq/Main.vue")
            },
            {
                path: "/partner",
                name: "partner",
                component: () => import("../views/partner/Main.vue")
            },

        ]

    },
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
  