<template>
  <div class="top-search">
      <div class="input-box">
          
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="搜索文章和文字"/>
      </div>
      <div class="shop-car">
          <router-link :to="{name:'ShopCar'}">
                <span class="iconfont icon-xiazai1"></span>
            </router-link>
      </div>
  </div>
</template>
<script>
export default {
  name:"TopSearch"
}
</script>
<style lang="less" scoped>
div.top-search{
    box-sizing: border-box;
    
    padding:0 0.44rem;
    padding-top: 0.27rem;
    display: flex;
    justify-content: space-between;
    @h:0.98rem;
    .input-box{
        height:@h;
        width:8.71rem;
        line-height:@h;
        font-size:0.43rem;
        background: #f1f2f4;
        
        input{
            border:0;
            outline:none;
            background:none;
            color:#989898!important;
        }
        .iconfont{
            margin:0 0.28rem;
        }
    }
    .shop-car{
        .iconfont{
             font-size:@h;
             color:#000;
        }
       
        
        
    }
    
}
</style>


