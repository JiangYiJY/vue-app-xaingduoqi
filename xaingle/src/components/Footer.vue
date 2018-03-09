<template>
  <nav>
      <ul>
          <router-link activeClass="active" v-for="(nav,i) in list" :key="i" :to="{name:nav.name}"  tag="li">
              <a href="javascript:;">
                  <div class="iconfont" :class="nav.icon"></div>
                  <p>{{nav.text}}</p>
              </a>
          </router-link>
      </ul>
  </nav>
</template>
<script>
export default {
  name : "Footer",
 props:{
     list:{
         type:Array,
         required:true
     }
 }
}
</script>
<style lang="less" scoped>
    @import "../less/style.less";

    nav{
         margin-top:1.5rem;
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        z-index: 99;
        background: #fff;
        padding:0.27rem 0;
        


        ul{
           
            display: flex;

            li{
                flex: 1;
                &.active{
                    // border-top:0.06rem solid #e90b08;

                    a{
                        padding-top:0;
                        .iconfont{
                            color:#ff003a
                        }
                        p{
                            color:#ff007a;
                        }
                        
                    }
                }

                a{
                    display: block;
                    height: @bh - 0.06rem;
                    
                    text-align: center;
                    padding-top:0.06rem;
                    box-sizing: border-box;

                    .iconfont{
                        @h:0.58rem;
                        height: @h;
                        line-height: @h;
                        font-size: 0.44rem;
                        color:#1b1a22;
                    }
                    p{
                        @h:0.34rem;
                        height: @h;
                        line-height: @h;
                        font-size: 0.22rem;
                        color:#201f24;
                    }
                }
            }
        }
    }
</style>

