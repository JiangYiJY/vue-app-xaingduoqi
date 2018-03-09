<template>
  <div class="desc">
      <p class="kindle">
          Kindle PaperWhite 新款升级版6英寸护眼飞反光电子墨水触控显示屏 WiFi 电子书 电纸书 阅读...
      </p>
      <p class="price">
          <span class="left">
              ￥958.00
          </span>
          <span class="right">
              已售6件
          </span>
      </p>
      <div class="style">
          <div class="left">
              <span class="s1">已选:</span><span class="s2">黑色,1件</span>
          </div>
          <div class="right">
              <span class="iconfont icon-gengduo-tianchong"></span>
          </div>
          

      </div>
      <div class="sheng">
          <ul>
              <li>
                  <span class="iconfont icon-yewutubiaosheng"></span>
                  <span>超值优惠</span>
              </li>
              <li>
                  <span class="iconfont icon-yewutubiaozheng"></span>
                  <span>正品保障</span>
              </li>
              <li>
                  <span class="iconfont icon-yewutubiaoyou"></span>
                  <span>包邮服务</span>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "DetailDesc"
};
</script>
<style lang="less" scoped>
.desc {
  box-sizing: border-box;
  padding: 0 0.45rem;
  padding-top: 0.64rem;

  .kindle {
    line-height: 0.57rem;
    margin-bottom: 0.9rem;
  }
  .price {
    margin-bottom: 1.02rem;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 0.57rem;
      color: #ff0135;
      margin-left: 0.2rem;
    }
    .right {
      color: #9b9b9b;
    }
  }
  .style {
    display: flex;
    padding-bottom: 0.49rem;
    border-bottom: 0.03rem solid #cccccc;
    justify-content: space-between;
    .left {
      .s1 {
        color: #989898;
        font-size: 0.35rem;
        margin-right: 0.42rem;
      }
      .right {
        .iconfont {
          color: #9b9b9b;
        }
      }
    }
  }
  .sheng{
      margin-top:0.4rem;
      margin-bottom:0.4rem;
      ul{
          display: flex;
          li{
              flex:1;
              .iconfont{
                 
                  color:#fff;
                  background:#000;
                  font-size:0.8rem;
                  margin-right:0.15rem; 
             }
          }
      }
  }
}
</style>


