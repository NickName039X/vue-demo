import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import element from 'element-ui';
Vue.config.productionTip = false
Vue.use(element);
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$http = Axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
