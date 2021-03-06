import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import i18n from './lang/index';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
