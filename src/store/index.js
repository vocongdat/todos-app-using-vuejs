import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { INCREMENT } from './mutations';

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'Go to school', done: true },
            { id: 2, text: 'Work from home 4', done: true },
            { id: 3, text: 'Work from home 1', done: true },
            { id: 4, text: 'Work from home 2', done: true },
            { id: 5, text: 'Work from home 3', done: false },
        ],
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter((todo) => todo.done);
        },
    },
    mutations: {
        [INCREMENT](state) {
            state.count++;
        },
    },
    actions: {
        increment({ commit }) {
            commit('INCREMENT');
        },
    },
});

export default store;
