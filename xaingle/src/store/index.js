import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import detail from "./detail"
import goods from "./goods"
import recommand from "./recommand"
import my from "./my"
import find from "./find"
import shop from "./shop"
Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        home,
         goods,
        // shopCar,
        detail,
        recommand,
        my,
        find,
        shop
    }
})