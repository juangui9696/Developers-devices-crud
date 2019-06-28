import Vue from 'vue';
import App from './components/App.vue';
import routera from './router';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');