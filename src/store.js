import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false
  },
  getters: {
    signedIn: state => state.signedIn
  },
  mutations: {
    setSignedIn(state, value) {
      state.signedIn = value;
    }
  },
  actions: {}
});
