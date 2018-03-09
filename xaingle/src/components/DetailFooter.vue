<template>
  <footer>
      <ul>
          <router-link :to="{name:item.name}" v-for="(item,i) in footerlist" :key="i" tag="li">
              <a href="javascript:;">
                  <div class="img-box" v-if="item.icon">
                      <span class="iconfont " :class="item.icon"></span>

                  </div>
                  <p>{{item.text}}</p>
              </a>
          </router-link>
      </ul>
  </footer>
</template>
<script>
export default {
  name: "DetailFooter",
  props: {
    footerlist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
footer {
  position:fixed;
  bottom:0;
  z-index:99;
  ul {
    display: flex;
    li {
      padding: 0 0.42rem;
      background:#fff;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .img-box {
          .iconfont {
            color: #000;
            margin-top: 0.16rem;
            margin-bottom: 0.16rem;
          }
        }
        p{
          color:#000;
        }
      }
      &:nth-of-type(1){
         border-right: 0.02rem solid #ccc;
      }
      
      &:nth-of-type(3){
          background: #000;
          a{
            p{
              color: #fff;
              margin-top:0.25rem;
            }
              
          }
      }
      &:nth-of-type(4){
        padding:0 0.68rem;
        text-align:center;
          background: #ff0137;
          a{
             p{
               color: #fff;
               margin-top:0.25rem;
             } 
          }
      }
    }
  }
}
</style>


