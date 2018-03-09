<template>
  <div>
    <FindHeader />
    <FindBanner :bannerList="bannerList" class="banner"/>
    <YouPin :youlist = "youlist"/>
    <TuiWen :glist="glist"/>
    <br/>
    <br>
    <br/>
    
    <FooterCom :list="list"/>
     
  </div>
</template>
<script>
import FindHeader from "@/components/FindHeader";
import FooterCom from "@/components/Footer";
import { mapState } from "vuex";
import FindBanner from "@/components/FindBanner";
import YouPin from "@/components/YouPin";
import TuiWen from "@/components/TuiWen";

export default {
  name: "Find",
  components: {
    FindHeader,
    FooterCom,
   YouPin,
   FindBanner,
   TuiWen
  },
  computed: {
    ...mapState("home", ["list"]),
    ...mapState("find",["bannerList","youlist","glist"])
  }
};
</script>
<style lang="less" scoped>
.banner{
  margin-top:1.6rem;
}
</style>



