import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login: {
            time: null,
            userName: null
        }
    },
    getters: {
        loginTime(state) {
            return state.login.time;
        },
        loginUserName(state) {
            return state.login.userName;
        }
    },
    mutations: {
        loginSucceed(state, login) {
            state.login.time = login.time;
            state.login.userName = login.userName;
        }
    },
    actions: {
        login(context, form) {
            // TODO 本来はログインAPIを叩いてエラーハンドリングをする必要がある
            context.commit('loginSucceed', {
                time: new Date(),
                userName: form.userName
            });
        }
    }
});
