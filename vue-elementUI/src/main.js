import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Navi from './components/Navi/Navi.vue'
import router from './router/index'
import store from './vuex/index'

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Navi)
})
