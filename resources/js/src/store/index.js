import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({

// export default new Vuex.Store({
  state: {
    token: localStorage.getItem('auth') || '',

 
  },


  mutations: {

    setToken(state, token) {

      localStorage.setItem('auth', token);
      state.token = token;
  },



  clearToken() {

    // localStorage.removeItem('auth');
    state.token = '';
},








  },
  actions: {},
  modules: {},


})
