<template>
  <div class="shop-car">
      <ShopHeader/>
      <ShopList :list= "list" :hascheck = "hascheck"/>
      
  </div>
</template>
<script>
import ShopHeader from "@/components/ShopHeader"
import ShopFooter from "@/components/ShopFooter"
import ShopList from "@/components/ShopList"
import {mapState, mapGetters} from "vuex"
export default {
  name:"ShopCar",
  components:{
      ShopHeader,
     
      ShopList
  },
  computed:{
     ...mapState("shop",["list","hascheck","allcheck"]),
     ...mapGetters("shop",["count","allprice"]),
  },
  
  
}
</script>

