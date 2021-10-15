import Vue from 'vue';
import Router from 'vue-router';

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component:()=> import('@/App.vue'),
        },
        {
            path: '/module',
            name: 'module',
            component:()=> import('@/views/module/index.vue'),
        },
        {
            path: '/views/table',
            name: 'table',
            component: () => import('@/views/table/index.vue')
        },
        {
            path: '/table',
            component: ()=>import('@c/table.vue'),
            // redirect: '/table/template1',
            children: [
                {
                    path: 'template1',
                    name: 'template1',
                    component:()=> import('@c/template1.vue')
                },
                {
                    path: 'parent',
                    name: 'parent',
                    component:  ()=>import('@c/parent.vue')
                },
            ]
        },
    ]
});


Vue.use(Router);
export default router;
