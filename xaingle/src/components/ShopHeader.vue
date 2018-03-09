<template>
  <header>
      <a href="javascript:;" class="left" @click="goBack">
          <span class="iconfont icon-jiantou3"></span>
      </a>
      
      <span class="title">我的购物车(5)</span>
      <router-link :to="{name:'My'}" class="right">
          <span>编辑</span>
      </router-link>
      

  </header>
</template>
<script>
export default {
  name: "ShopHeader",
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>
<style lang="less" scoped>
header {
    border-bottom:0.3rem solid #e2e2e2;
    display:flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0 0.37rem;
  @h: 1.44rem;
  height: @h;
  
  line-height: @h;
  .left {
    .iconfont {
      font-size: 0.61rem;
      color: #000;
    }
  }
  
  
}
</style>


