/*
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-06-21 21:42:21
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-06-21 22:00:28
 */

const state = {
    studentInfo: {}
}

const mutations = {
    SAVE_STUDENT_INFO: (state, studentInfo) => {
        console.log("mutations", studentInfo);
        state.studentInfo = studentInfo;
    }
}

const actions = {
    // 根据 yaml 文件编辑资源
    save({ commit }, studentInfo) {
        console.log("actions", studentInfo);
        commit("SAVE_STUDENT_INFO", studentInfo);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}