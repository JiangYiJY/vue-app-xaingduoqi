<template>
  <div>
      <MyTop />
      <Order :iconlist="iconlist"/>
     
      <br/>
      
      <FooterCom :list="list"/>
  </div>
</template>
<script>
import MyTop from "@/components/MyTop"
import FooterCom from "@/components/Footer"
import Order from "@/components/Orders"
import { mapState } from "vuex"
export default {
  name:"My",
  components:{
    MyTop,
    FooterCom,
    Order
    
  },
  computed:{
      ...mapState("home",["list"]),
      ...mapState("my",["iconlist"]),
    }
}
</script>


