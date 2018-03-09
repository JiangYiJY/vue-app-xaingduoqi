<template>
  <div class="youpin">
      <p class="top-text">
          <span class="iconfont icon-huangguan"></span>
          <span>优品</span>
      </p>
      <ul>
          <router-link :to="{name:'Detail'}" tag="li" v-for="(item,i) in youlist" :key = "i">
              <a href="javascript:;">
                  <div class="img-box">
                      <img :src="item.imgSrc" />

                  </div>
                  <div class="text">
                      <p class="p1">
                          {{item.title}}
                      </p>
                      <p class="p2"> 
                          <span>￥{{item.price}}</span>
                          
                      </p>
                  </div>
              </a>
          </router-link>
      </ul>
      <div class="more">
          <router-link :to="{name:'Goods'}">
              查看更多
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: "YouPin",
  props: {
    youlist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.youpin {
  height: 7.56rem;
  margin-top: 0.32rem;
  padding-bottom:0.6rem;
  border-bottom: 0.3rem solid #f1f2f4;
  .top-text {
    text-align: center;
  }
  ul {
    margin-top: 0.4rem;
    box-sizing: border-box;
    padding:0 0.3rem;
    display: flex;
    li {
      flex: 1;
      a {
        .img-box {
          width: 2.1rem;
          height: 2.84rem;
          margin-bottom: 0.35rem;
        }
        .text {
          font-size: 0.38rem;
          line-height: 0.6rem;
          color: #000;
        }
      }
    }
  }
  .more{
      margin-top: 0.82rem;
      
      text-align:center;
      a{
          padding:0.1rem 0.4rem;
          color:#000;
        //   display:block;
          border:0.01rem solid #000;
      }
  }
}
</style>


