import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import element from 'element-ui';
import router from '@/router/index.js';
import './styles/common.css';
Vue.config.productionTip = false
// Vue.config.performance = true
Vue.use(element);
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$http = Axios;
let vm = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

console.log('vm', vm);

