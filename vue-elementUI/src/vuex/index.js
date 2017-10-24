import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import navi from './Modules/Navi'
import student from './Modules/Student'

export default new Vuex.Store({
    modules: {
        navi: navi,
        student: student
    }
})