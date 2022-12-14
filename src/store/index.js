import Vue from 'vue'
import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    addList (state, payload) {
  },
  actions: {
  plugins: [vuexPersist.plugin]
})
