<template>
  <div class="hot">
      <p>
          <span></span>汽车用品<span></span>
      </p>
     <ul>
              <router-link :to="{name:item.name}" v-for="(item,i) in imglist" :key = "i" tag="li">
                  <a href="javascript:;">
                      <div class="img-box">
                          <img :src="item.imgSrc" />
                      </div>
                      <h4>{{item.text}}</h4>
                  </a>
              </router-link>
              
          </ul>

     
  </div>
</template>
<script>
export default {
  name: "Hot",
  props: {
    imglist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.hot {
  width: 8.08rem;
  padding-top: 0.78rem;

  p {
    font-size: 0.41rem;
    text-align: center;
    span {
        display: inline-block;
      width: 0.9rem;
      height: 0.08rem;
      background: #000;
      margin-top:-1rem;
    }
    padding-bottom: 0.84rem;
  }
  ul {
      display: flex;
      flex-wrap: wrap;
     
    li {
        width:30%;
        margin-bottom: 0.8rem;
      a {
          display: flex;
          flex-direction: column;
          align-items: center;
        .img-box {
          width: 1.37rem;
          height: 1.37rem;
          padding-bottom: 0.41rem;
          
        }
        h4 {
          font-size: 0.32rem;
          text-align: center;
          color:#000;
          font-weight:300;
        }
      }
    }
  }
}
</style>


