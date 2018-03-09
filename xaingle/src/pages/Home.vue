<template>
  <div>
      <TopSearch/>
      <TopNav :navlist="navlist"/>
      <Banner :bannerList="bannerList"/>
      <ContentBaby :contBaby="contBaby"/>
      <ContentLife :contLife="contLife"/>
      <ContentFruit :contFruit="contFruit"/>
      
      <br/>
      <br>
      <br/>
      
      <FooterCom :list="list"/>
  </div>
</template>
<script>
import TopSearch from "@/components/TopSearch"
import TopNav from "@/components/TopNav"
import { mapState } from 'vuex'
import FooterCom from "@/components/Footer"
import Banner from "@/components/Banner"
import ContentBaby from "@/components/ContentBaby"
import ContentLife from "@/components/ContentLife"
import ContentFruit from "@/components/ContentFruit"



export default {
  name:"Home",
  components:{
      TopSearch,
      TopNav,
      Banner,
      FooterCom,
      ContentBaby,
      ContentLife,
      ContentFruit
      
  },
  computed:{
      ...mapState("home",["navlist","list","bannerList","contBaby","contLife","contFruit"]),
      
  }
}
</script>

