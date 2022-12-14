import Vue from 'vue'
import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default new Vuex.Store({
  state: {
    taskLists: []
  },
  getters: {
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    addList (state, payload) {
      state.taskLists.push({ title: payload.title, cards:[] })
    },
    removeList (state, payload) {
      state.taskLists = state.taskLists.filter(list => list.title !== payload.title)
    }
  },
  actions: {
    addList (context, payload) {
      context.commit('addList', payload)
    },
    removeList (context, payload) {
      context.commit('removeList', payload)
    }
  },
  plugins: [vuexPersist.plugin]
})
