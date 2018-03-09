<template>
  <div >
      <div class="fixed">
          <TopSearch/>
        
            <TopNav :navlist="navlist"/>
      </div>
      
       <Edu :listedu="listedu" class="Edu"/>

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
import TopNav from "@/components/TopNav"
import Edu from "@/components/Edu"

export default {
  name : "Goods",
 
  components : {
      TopSearch,
      FooterCom,
      TopNav,
      Edu
      
  },
  computed:{
      ...mapState("home",["list","navlist"]),
      ...mapState("recommand",["listedu"])
      
      
  }
}
</script>

<style lang="less" scoped>
.fixed{
    position: fixed;
    top:0;
    
    background:#fff;
}
.Edu{
    margin-top: 2.8rem;
}

</style>


