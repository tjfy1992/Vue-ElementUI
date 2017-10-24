/*
 * 学生基本信息
 */
const state = {
    //查询学生基本信息的表单
    studentForm: {
        id: '',
        name: '',
        type: '',
    },

    //是否进行查询
    studentQueryFlag: false,

}

const actions = {
    //存入搜索船舶基本资料form值
    changeStudentFormAction({commit}, payload) {
        commit('changeStudentFormMutation', payload)
    },

    //更改是否搜索标识
    changeStudentQueryFlagAction ({commit}, payload){
        commit('changeStudentQueryFlagMutation', payload)
    },

}

//mutations，真正用来修改state的方法集
const mutations = {
    changeStudentFormMutation (state, payload) {
        state.studentForm = payload
    },

    changeStudentQueryFlagMutation (state, payload) {
        state.studentQueryFlag = payload
    },
}

const getter = {

}

const moduleStudent = {
    state: state,
    mutations: mutations,
    actions: actions,
    getter: getter
}

export default moduleStudent;