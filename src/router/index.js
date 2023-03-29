import Vue from "vue";
import Router from "vue-router";

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: "/",
            name: "index",
            redirect:'/index1',
        },
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
            path: "/index3",
            name: "index3",
            component: () => import("@/views/index3.vue")
        },
        {
            path: "/schema",
            name: "schema",
            component: () => import("@/views/schema.vue")
        },
        // {
        //     path: "/formast",
        //     name: "formast",
        //     component: () => import("@/views/testformast.vue")
        // },
        // {
        //     path: "/family",
        //     name: "family",
        //     component: () => import("@/views/testfamily.vue")
        // },
        {
            path: "/table",
            component: () => import("@c/Table.vue"),
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
