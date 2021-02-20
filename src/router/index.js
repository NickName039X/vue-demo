import Vue from 'vue';
import Router from 'vue-router';

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: import('@/App.vue'),
        },
        {
            path: '/module',
            name: 'module',
            component:()=> import('@/views/module/index.vue'),
        },
        {
            path: '/template',
            name: 'template',
            component:()=> import('@c/template.vue')
        },
        {
            path: '/table',
            name: 'index',
            component: () => import('@/views/table')
        },
        {
            path: '/table',
            name: 'table',
            component: import('@c/table.vue'),
            children: [
                {
                    path: 'son',
                    name: 'son',
                    component: import('@c/son.vue')
                },
                {
                    path: 'parent',
                    name: 'parent',
                    component:  import('@c/parent.vue')
                },
            ]
        },
    ]
});


Vue.use(Router);
export default router;
