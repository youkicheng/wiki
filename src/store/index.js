import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import wiki from './modules/wiki'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
     randomList: [],
     hotList: [],

   },
   getters,
   mutations,
   actions,
   modules: {
       wiki,
       search
   }    
})
