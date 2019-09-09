import Vue from 'vue';
import Router from 'vue-router';

Vue.use (Router);

const hello = () => import('@c/HelloWorld.vue');
const table = () => import('@c/table.vue');


const router = new Router ({
    routes : [
        {
            path : '/hello',
            name : 'hello',
            component : hello
        }, {
            path : '/table',
            name : 'table',
            component : table
        },
    ]
});
export default router;
