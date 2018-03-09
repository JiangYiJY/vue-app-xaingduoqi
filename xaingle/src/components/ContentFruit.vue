<template>
  <div class="content-fruit ">
      <ul>
          <router-link :to="{name:'Detail'}" tag="li" v-for="(item,i) in contFruit" :key = "i">
              <a href="javascript:;">
                  <div class="img-box">
                      <img :src="item.imgSrc" />

                  </div>
                  <div class="text">
                      <p class="p1">
                          {{item.detail}}
                      </p>
                      <p class="p2"> 
                          <span>￥{{item.price}}</span>
                          <del v-if = "item.discount">{{item.discount}}</del>
                      </p>
                  </div>
              </a>
          </router-link>
      </ul>
      <div class="content-end">
          <p>已经显示全部数据</p>
      </div>
  </div>
</template>
<script>
export default {
  name: "ContenFruit",
  props: {
    contFruit: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.content-fruit {
  ul {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 0.43rem;
    justify-content: space-between;
    li {
        padding-top:0.6rem;
      width: 50%;
      @w:4rem;
      
      a {
        .img-box {
          height: @w;
          width:@w;
          padding-bottom:0.6rem;
          
        }
        .text{
            width:@w;
            @h:0.46rem;
            color:#000;
            .p1{
                line-height: @h;
                font-size: @h;

            }
            .p2{
                font-size: 0.34rem;
            }
        }
      }
      &:nth-of-type(2n){
          a{
              display: flex;
              flex-direction:column;
              align-items:flex-end; 
              
          }
      }
    }
  }
  .content-end{
      margin: 0.2rem;
      p{
          font-size:0.29rem;
          color:#9c9c9c;
          text-align: center;
          
      }
  }
}
</style>


