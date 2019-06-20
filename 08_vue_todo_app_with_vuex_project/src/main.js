import Vue from 'vue'
import App from './App.vue'
import routerConfig from './router'
import storeConfig from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: routerConfig,
    store: storeConfig
}).$mount('#app');
