<template>
  <div class="content-baby">
      <div class="left">
          <p class="p1">宝宝爱喝水</p>
          <p class="p2">
              萌趣耐摔 倒杯不酒
          </p>
          <div class="img-box">
              <img src="http://m.qpic.cn/psb?/V10C7AQj17nOSf/kFhikZsP2R2vFGUdpb0uL2AaUUZxIrcxLdBs1zkalrI!/b/dHMAAAAAAAAA&bo=sgB4AQAAAAADB.k!&rf=viewer_4" />
          </div>
          
      </div>
      <div class="right">
          <ul>
              <router-link tag= "li" :to="{name:'Detail'}" v-for="(item,i) in contBaby" :key = "i">
                  <p class="p1">{{item.title}}</p>
                <p class="p2">
                {{item.text}}
                 </p>
                 <div class="">
                      <img :src="item.imgSrc" />
                 </div>
                 
              </router-link>

          </ul>
      
      </div>
  </div>
  
</template>
<script>
export default {
  name: "ContentBaby",
  props: {
    contBaby: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.content-baby {
    border-top: 0.15rem solid #f1f2f4;
    box-sizing: border-box;
    padding-top:0.28rem;
    padding-bottom: 0.4rem;
  
  background:#f1f2f4;
  display: flex;
  .p1 {
    font-size: 0.34rem!important;
    font-weight: 600;
    color: #4a4a4a;
    line-height: 0.55rem;
  }
  .p2 {
    font-size: 0.26rem!important;
    color: #6c6c6c;
  }
  .left {
      padding-top:0.2rem;
    width: 6rem;
    text-align: center;
    background: #f1f2f4;
    .img-box {
       height: 3.91rem;
       width: 1.66rem;
      margin-left:0.64rem;
    }
  }
  .right {
      padding-top:0.2rem;
      background:#fff;
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    
    li {
      width: 50%;
      box-sizing: border-box;
      padding-left:0.34rem; 
      padding-right:0.34rem;
      text-align: center;
      margin-bottom: 0.1rem;
      &:nth-last-child(1){
          box-sizing: border-box;
          padding-top:1rem; 

      }
     

      img {
        height: 1.51rem;
        width: 1.51rem;
        text-align: center;
         margin-left: 1.24rem;
      }
    }
  }
}
</style>


