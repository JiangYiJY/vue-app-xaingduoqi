<template>
  <header>
      <div class="icon">
          <a href="javascript:;" @click = "goBack">
              <span class="iconfont icon-jiantou3"></span>
          </a>
          
            <p class="goodsName" >
                <span style="display:none;" id ="paper">PaperWhite...</span> 
            </p>
            <router-link :to="{name:'ShopCar'}">
                <span class="iconfont icon-xiazai1"></span>
            </router-link>
            <router-link :to="{name:'My'}">
                <span class="iconfont icon-share"></span>
            </router-link>
            
            
      </div>
      <ul style="display:none;" id="detail-ul">
          <li  class="active">
              <a href="javascript:;">
                  商品
              </a>
          </li>
          <li >
              <a href="javascript:;">
                  详情
              </a>
          </li>
          <li>
              <a href="javascript:;">
                  须知
              </a>
          </li>
          <li>
              <a href="javascript:;">
                 比价
              </a>
          </li>

      </ul>
      
  </header>
</template>
<script>
export default {
  name: "DetailHeader",
  props:{
      isShow:{
          type:Boolean,
          default:false
      },
     
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }

};
</script>
<style lang="less" scoped>
header {
    position: fixed;
    top:0;
    background: rgba(255,255,255,0);
    // opacity:0.5;
    z-index:99;

    box-sizing: border-box;
    padding: 0 0.55rem;
    padding-top: 0.4rem;
    .icon{
        display: flex;
        margin-bottom: 0.8rem;
        a{
            color:#000;
        }
        .iconfont{
            font-size:0.58rem;
           
        }
        .goodsName{
             margin-left: 2rem;
             margin-right: 1.3rem;
             width:3.5rem;
        }
        .icon-share{
            margin-left:0.3rem;
            font-size:0.8rem;
        }
        .icon-xiazai1{
           font-size:0.8rem; 
           
        }
    }
    ul{
        display: flex;
        
        li{
            flex: 1;
            padding: 0 0.42rem;
            padding-bottom:0.36rem;
            a{
                color:#000;
            }
            &.active{
                a{
                    color:#ef0536;
                }
                border-bottom: 0.08rem solid #ef0536;
            }

        }
    }
}
</style>


