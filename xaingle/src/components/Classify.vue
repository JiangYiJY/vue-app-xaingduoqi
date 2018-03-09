<template>
  <div class="classify">
      <nav>
          <ul>
              <router-link :to="{name:item.name}" v-for="(item,i) in navlist" :key = "i" tag="li" activeClass="active">
                  <a href="javascript:;">
                      {{item.text}}
                  </a>
              </router-link>
              
          </ul>
      </nav>
      <div class="content-goods">
          <div class="img-box">
              <img src="http://m.qpic.cn/psb?/V10C7AQj17nOSf/LExhLTAT4haKuRBG0tA9jDDldbQ9i0EcCUmxIgaTyN4!/b/dGYBAAAAAAAA&bo=IwMIAQAAAAADBws!&rf=viewer_4" />

          </div>

      </div>

  </div>
</template>
<script>
export default {
  name: "Classify",
  props: {
    navlist: {
      type: Array,
      require: true
    }
  }
};
</script>
<style lang="less" scoped>
.classify {
  display: flex;
  margin-top: 0.2rem;
  nav {
    ul {
      li {
        @h: 1.41rem;
        background: #f1f2f4;
        margin-bottom: 0.13rem;
        width: 2.2rem;
        height: @h;
        text-align: center;
        line-height: @h;
        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }
        a {
          color: #000;
        }
        &.active{
            background:#fff;
        }
      }
    }
  }
  .content-goods {
    .img-box {
      
      padding: 0.3rem 0.23rem;
      width: 8.03rem;
      height: 2.63rem;
    }
  }
}
</style>





