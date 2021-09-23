import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleA from './commons'

const store = new Vuex.Store({
    modules:{
        commons:moduleA
    }
})

export default store