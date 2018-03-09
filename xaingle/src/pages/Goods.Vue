<template>
  <div >
      <TopSearch/>
        
        <Classify :navlist="navlist"/>
        <router-view class="router-view" :imglist="imglist"/>
        <br/>
        <br/>

        <br/>
        <br/>
        
        <br/>
        
       <FooterCom :list="list"/>
      
  </div>
</template>
<script>
import TopSearch from "@/components/TopSearch"
import FooterCom from "@/components/Footer"
import { mapState } from 'vuex'
import Classify from "@/components/Classify"

export default {
  name : "Goods",
  data(){
      return {
          title : "商品分类"
      }
  },
  components : {
      TopSearch,
      FooterCom,
      Classify,
  },
  computed:{
      ...mapState("home",["list"]),
      ...mapState("goods",["navlist","imglist"])
      
  }
}
</script>

<style lang="less" scoped>
.router-view{
    
    
    position:absolute;
    top:4.15rem;
    left:2.85rem;
}
</style>


