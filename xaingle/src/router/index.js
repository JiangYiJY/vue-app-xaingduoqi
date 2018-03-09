import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/Home"
import Detail from "@/pages/Detail"
import Goods from "@/pages/Goods"
import Find from "@/pages/Find"
import My from "@/pages/My"
import Login from "@/pages/Login"
import Digital from "@/pages/Digital"
import Food from "@/pages/Food"
import Machine from "@/pages/Machine"
import MakeUp from "@/pages/MakeUp"
import Hot from "@/components/Hot"
import Register from "@/pages/Register"
import NeedPay from "@/pages/NeedPay"
import Success from "@/pages/Success"
import Cancle from "@/pages/Cancle"
import ShopCar from "@/pages/ShopCar"
Vue.use(Router)

export default new Router({
  routes: [
    {path : "/",redirect : {name:"Home"}},
    {path: '/home',name: 'Home',component: Home},
    {path : "/detail",name  : "Detail",component : Detail},
    {path : "/goods",name  : "Goods",component : Goods,children:[
      {path:"index",name:"index",component:Hot},
      { path: "", redirect:{name:'index'} },
     
      { path: "digital", name: "digital", component: Hot },
      { path: "makeup", name: "makeup", component: Hot },
      { path: "machine", name: "machine", component: Hot },
      { path: "food", name: "food",component: Hot },
      { path: "baby", name: "baby", component: Hot },
      { path: "furniture", name: "furniture", component: Hot },
      { path: "out", name: "out", component: Hot },
      { path: "bags", name:"bags", component: Hot },
      { path: "car", name: "car", component: Hot },
     
    ]},
    {path : "/login",name : "Login",component : Login},
    {path : "/register",name : "Register",component : Register},
    { path: "/find", name: "Find", component: Find },
    { path: "/my", name: "My", component: My },
    
    
    { path: "/digital", name: "Digital", component: Digital },
    { path: "/machine", name: "Machine", component: Machine },
    { path: "/food", name: "Food", component: Food },
    { path: "/makeUp", name: "MakeUp", component: MakeUp },
    { path: "/neddpay", name: "Npay", component: NeedPay },
    { path: "/success", name: "Success", component: Success },
    { path: "/cancle", name: "Cancle", component: Cancle },
    { path: "/shopcar", name: "ShopCar", component: ShopCar },
    
   
    

  ]
})
