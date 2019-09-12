import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const hello = () => import('@c/HelloWorld.vue');
const table = () => import('@c/table.vue');
const parent = () => import('@c/layout02/Parent.vue');
const child = () => import('@c/layout02/Child.vue');
const son = () => import('@c/layout02/Son.vue');

const template = () => import('@c/Template.vue');


const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'template',
            component: template
        },
        {
            path: '/hello',
            name: 'hello',
            component: hello
        },
        {
            path: '/table',
            name: 'table',
            component: table,
            redirect:'/table/son',
            children: [
                {
                    path: 'son',
                    name: 'son',
                    component: son
                },
                {
                    path: 'parent',
                    name: 'parent',
                    component: parent
                },
            ]
        },
        {
            path: '/child',
            name: 'child',
            component: child
        }
    ]
});
export default router;
