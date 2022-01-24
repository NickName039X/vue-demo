import Vue from "vue";
import Router from "vue-router";

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: "/index1",
            name: "index1",
            component: () => import("@/views/index1.vue")
        },
        {
            path: "/index2",
            name: "index2",
            component: () => import("@/views/index2.vue")
        },
        {
            path: "/table",
            component: () => import("@c/table.vue"),
            // redirect: '/table/template1',
            children: [
                {
                    path: "template1",
                    name: "template1",
                    component: () => import("@c/template1.vue")
                },
                {
                    path: "parent",
                    name: "parent",
                    component: () => import("@c/parent.vue")
                }
            ]
        }
    ]
});

Vue.use(Router);
export default router;
