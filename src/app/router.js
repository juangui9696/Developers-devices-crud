import Vue from 'vue';
import router from 'vue-router';
import Devices from './components/views/Devices.vue';

Vue.use(router);


export default new router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        { 
            path: '/devices', 
            name: 'devices',  
            component: Devices
        }
  ]
})