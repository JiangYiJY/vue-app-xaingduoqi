<template>
  <footer>
      <div class="left">
          <span class="iconfont icon-zhengque"></span>
          <span class="all">全选</span>
          <span>合计：</span>
          <span>￥0.00</span>
      </div>
      <div class="right">
          <a href="javascript:;">结算(0)</a>
      </div>
  </footer>
</template>
<script>
export default {
  name: "ShopFooter"
};
</script>
<style lang="less" scoped>
footer {
  @h: 1.51rem;
  height: @h;
  line-height: @h;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  
  .bg() {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff7457+0,fd3748+100 */
    background: rgb(255, 116, 87); /* Old browsers */
    background: -moz-linear-gradient(
      top,
      rgba(255, 116, 87, 1) 0%,
      rgba(253, 55, 72, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 116, 87, 1) 0%,
      rgba(253, 55, 72, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(255, 116, 87, 1) 0%,
      rgba(253, 55, 72, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr="#ff7457",
        endColorstr="#fd3748",
        GradientType=0
      ); /* IE6-9 */
    color: Comments;
  }
  .left {
    width:7.2rem;
    box-sizing: border-box;
    padding-left: 0.37rem;
    .iconfont {
      color: red;
    }
    span {
      margin-right: 0.2rem;
    }
  }
  .right {
    width: 3.62rem;
    text-align: center;
    .bg();
    a {
      color: #fff;
      
    }
  }
}
</style>


