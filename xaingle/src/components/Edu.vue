<template>
  <div class="edu">
      <div v-for="(item,i) in listedu" :key = "i">
          <p class="title">
              {{item.title}}
          </p>
          <ul>
              <router-link v-for="(book,i) in item.imglist  " :key = "i" tag="li" :to="{name:'Detail'}">
                  <a href="javascript:;">
                      <div class="img-box">
                          <img :src="book.imgSrc" />
                      </div>
                      <div class="detail">
                        <p>
                            <span class="iconfont icon-JD"></span>
                            <span>{{book.desc}}</span>
                        </p>
                        <p>￥{{book.price}}</p>
                          
                      </div>
                  </a>
              </router-link>
          </ul>
      </div>
      
  </div>
</template>
<script>
export default {
  name:"Edu",
  props:{
      listedu:{
          type:Array,
          required:true
      }
  }
}
</script>
<style lang="less" scoped>
.edu{
    @h:1.2rem;
    .title{
        height:@h;
        line-height:@h;
        border-top:0.02rem solid #e2e2e2;
        border-bottom:0.02rem solid #e2e2e2;
        font-size:0.48rem;
        text-align: center;
        
    }
    .iconfont{
        width:1rem;
        height: 1rem;
        color:red;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width:50%;
            box-sizing: border-box;
            margin-bottom: 0.38rem;

            
            padding:0 0.43rem;
            padding-top: 0.65rem;
            a{@w:4.45rem;
                .img-box{
                    width:@w;
                    height:4.59rem;
                    margin-bottom: 0.67rem;
                }
                .detail{
                    color:#000;
                    font-size: 0.38rem;
                    line-height:0.59rem;
                    width:@w;
                }
            }
        }
    }
}
</style>


