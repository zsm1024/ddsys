import Vuex from "vuex"
import Vue from 'vue'
import getters from './getters'

Vue.use(Vuex)

const store =  new Vuex.Store({
    getters
})

export default store