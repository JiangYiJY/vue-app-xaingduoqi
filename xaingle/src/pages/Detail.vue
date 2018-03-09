<template>
  <div>
    <DetailHeader/>
    <DetailBanner :bannerList="bannerList" class="banner"/>
    <DetailDesc/>
    <Pics :piclist="piclist"/>
    <XuZhi :contlist="contlist"/>
    <BiJia/>
    <DetailFooter :footerlist="footerlist"/>
  </div>
</template>
<script>
import DetailHeader from "@/components/DetailHeader"
import DetailBanner from "@/components/DetailBanner"
import DetailDesc from "@/components/DetailDesc"
import Pics from "@/components/Pics"
import XuZhi from "@/components/XuZhi"
import BiJia from "@/components/BiJia"
import DetailFooter from "@/components/DetailFooter"

import { mapState, mapMutations } from 'vuex';
export default {
  name:"Detail",
  components:{
    DetailHeader,
    DetailBanner,
    DetailDesc,
    Pics,
    XuZhi,
    BiJia,
    DetailFooter

  },
  computed:{
    ...mapState("detail",["bannerList","piclist","contlist","footerlist"])

  },
  
}
</script>
<style lang="less" scoped>

</style>


