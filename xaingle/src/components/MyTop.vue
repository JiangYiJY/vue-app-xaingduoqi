<template>
  <div class="mytop">
      <div class="left">
          <div class="iconfont icon-morentouxiang"></div>
          <p>
              <router-link :to="{name:'Login'}">登录</router-link>
              <span>/</span>
              <router-link :to="{name:'Register'}">注册</router-link>
              
          </p>
      </div>
      <div class="right">
          <div >
              <router-link :to="{name:'ShopCar'}">
                <span class="iconfont icon-xiazai1"></span>
            </router-link>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"MyTop"
}
</script>
<style lang="less" scoped>
.mytop{
    background: #000;
    
    
    height:4.02rem;
    box-sizing: border-box;
    padding:1.84rem 0.69rem 0.33rem 0.44rem;
    .iconfont{
        color:#fff;
    }
    .left{
        
        @h:1.87rem;
        display: flex;
        height: @h;
        line-height: @h;
        p{
            font-size: 0.5rem;
            a{
                color:#fff;
            }
            span{
                color:#fff;
                margin-left: 0.23rem;
            }
        }
        .iconfont{
            font-size:@h;
            margin-right: 0.35rem;
        }
    }
    .right{
        position:fixed;
        top:0.61rem;
        right:0.69rem;
        z-index:99;
        .iconfont{
            font-size:0.76rem;
        }
    }
}
</style>


