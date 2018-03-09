// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Http from "vue-resource"
import store from "./store"
import $ from "jquery"

Vue.use(Http);

Vue.config.productionTip = false

var abc = document.documentElement.clientWidth
var bl = abc/1080
var fontSize = 100*bl
document.documentElement.style.fontSize = fontSize + "px"
//js操作
//detail页面
var index = 0;


$(window).scroll(function(){
  // console.log($(window).scrollTop())
  //321px
  
  
  if (!$(window).scrollTop()) {
    $("#detail-ul").hide();
    
  }else{
    $("#detail-ul").show(5000);
  }
  if($(window).scrollTop()>=321){
    $("#paper").show();
  }else{
    $("#paper").hide();
    
  }
 

  if ($(window).scrollTop()>=449) {
    $("#detail-ul li").removeClass("active");
    $("#detail-ul li").eq(1).addClass("active");
    
  }
   if ($(window).scrollTop() >= 6149){
    $("#detail-ul li").removeClass("active");
    $("#detail-ul li").eq(2).addClass("active");
  }
   if ($(window).scrollTop() >= 6518){
    $("#detail-ul li").removeClass("active");
    $("#detail-ul li").eq(3).addClass("active");
  }
  $("#detail-ul li").eq(0).click(function () {
    $(window).scrollTop(0);
    $("#detail-ul li").removeClass("active");
    $(this).addClass("active");
  })
  $("#detail-ul li").eq(1).click(function () {
    $(window).scrollTop(449);
    $("#detail-ul li").removeClass("active");
    $(this).addClass("active");
  })
  $("#detail-ul li").eq(2).click(function () {
    $(window).scrollTop(6149);
    $("#detail-ul li").removeClass("active");
    $(this).addClass("active");
  })
  $("#detail-ul li").eq(3).click(function () {
    $(window).scrollTop(6518);
    $("#detail-ul li").removeClass("active");
    $(this).addClass("active");

  })
 
})




  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  $
})
