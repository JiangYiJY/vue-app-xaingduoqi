<template>
  <div class="content-life">
      <ul>
          <router-link tag="li" v-for="(item,i) in contLife" :key = "i" :to="{name:'Detail'}">
              <a href="javascript:;">
                  <div>
                      <p class="p1">{{item.title}}</p>
                      <p class="p2">{{item.content}}</p>

                  </div>
                  <div class="img-box">
                      <img :src="item.imgSrc" />
                  </div>
              </a>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default {
  name: "ContentLife",
  props: {
    contLife: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.content-life {
    border-bottom: 0.28rem solid #f1f2f4;
  li {
      border-bottom: 0.03rem solid #f0f1f3;
      &:nth-of-type(3){
          border:0;
      }
      
    a {
        color:#000;
      display: flex;
      box-sizing: border-box;
      padding: 0.47rem 1.08rem;
      justify-content: space-between;
      align-items:center;
      .img-box {
        width: 2.44rem;
        height: 2.26rem;
      }
      .p1{
          font-size: 0.52rem;
          line-height: 0.7rem;
          font-weight: 600;
      }
      .p2{
          font-size: 0.24rem;
      }
    }
    &:nth-of-type(2){
          a{
              flex-direction: row-reverse;
              .img-box {
                    width: 2.44rem;
                    height: 2.62rem;
                }
                padding-bottom: 1rem;
          }
      }
  }
}
</style>


