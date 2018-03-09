<template>
  <header>
      <span class="text">
          发现
      </span>
       <router-link :to="{name:'ShopCar'}" class="shop-car">
                <span class="iconfont icon-xiazai1"></span>
        </router-link>
  </header>
</template>
<script>
export default {
  name: "FindHeader"
};
</script>
<style lang="less" scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  @h: 1.46rem;
  background: #fff;
  .text {
    height: @h;
    line-height: @h;
    font-size: 0.46rem;
    font-weight: 600;
    margin-left: 4.97rem;
    margin-right: 3.62rem;
  }
  .iconfont {
    font-size: 0.8rem;
    height: @h;
    line-height: @h;
  }
  .shop-car {
    .iconfont {
      color: #000;
    }
  }
}
</style>


