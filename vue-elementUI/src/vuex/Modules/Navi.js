/*
 * 导航页
 */
const state = {
    //学生类型
    studentTypeList:[],

}

const actions = {
    //存入交通类型数据
    changeStudentTypeListAction({commit}, payload) {
        commit('changeStudentTypeListMutation', payload)
    },
}

//mutations，真正用来修改state的方法集
const mutations = {
    changeStudentTypeListMutation (state, payload) {
        state.studentTypeList = payload
    },
}

const getter = {

}

const moduleNavi = {
    state: state,
    mutations: mutations,
    actions: actions,
    getter: getter
}

export default moduleNavi;