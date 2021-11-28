import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nuDisable:false,
    opDisable:true,
  },
  mutations: {
   
    disableBotones(state, valor){
      state.nuDisable = valor;
    },
    disableOperador(state,valor){
     state.opDisable = valor
    }
  },
  actions: {
  },
  modules: {
  }
})
