import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nuDisable:false,
    opDisable:true,
    operador:"",
    operador1:"",
    operador2:"",
    resultado:0,
  },
  mutations: {
   
    disableBotones(state, valor){
      state.nuDisable = valor;
    },
    disableOperador(state,valor){
     state.opDisable = valor
    },
    operador1(state,valor){
      state.operador1=valor
    },
    operador2(state,valor){
      state.operador2=valor
    },
    operador(state,valor){
      state.operador=valor
    },
    resultado(state,valor){
      state.resultado=valor
    }




  },
  actions: {
  },
  modules: {
  }
})
