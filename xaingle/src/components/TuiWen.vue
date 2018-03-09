<template>
  <div class="tuiwen">
      <p class="p1">
          推文
      </p>
      <ul>
          <router-link v-for="(item,i) in glist" :key = "i" tag= "li" :to="{name:'Detail'}">
              <a href="javascript:;">
                  <div class="img-box">
                      <img :src="item.imgSrc" />
                  </div>
                  <div class="desc">
                      <h3>
                          {{item.title}}
                      </h3>
                      <div class="com">
                        <div class="left">
                            <span>
                            #{{item.classify}}
                        </span>
                        </div>
                        <div class="right">
                            <span class="iconfont icon-xihuan"></span>
                            <span>
                            {{item.love}}
                        </span>
                        <span class="iconfont icon-liulan"></span>
                        <span class="views">{{item.views}}</span>
                        <span>{{item.time}}</span>
                        </div>
                          
                          
                      </div>
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
  name: "TuiWen",
  props: {
    glist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.tuiwen {
  box-sizing: border-box;
  padding: 0 0.45rem;
  .p1 {
    text-align: center;
    padding-top: 0.33rem;
    padding-bottom: 0.91rem;
  }
  ul {
    li {
      margin-bottom: 0.5rem;
      a {
        .desc {
          h3 {
            font-size: 0.51rem;
            font-weight: 600;
            margin-top: 0.95rem;
            margin-bottom: 0.43rem;
            color: #000;
          }
          .com {
            display: flex;
            justify-content: space-between;
            .right {
              color: #9c9c9c;
              .views {
                margin-right: 0.05rem;
              }
            }
            .left {
              color: #000;
            }
          }
        }
      }
      &:nth-of-type(even) {
        a {
          .img-box {
            height: 6.6rem;
            width: 8.82rem;
            margin-left: 0.54rem;
          }
        }
      }
    }
  }
  .content-end {
    margin: 0.2rem;
    p {
      font-size: 0.29rem;
      color: #9c9c9c;
      text-align: center;
    }
  }
}
</style>


