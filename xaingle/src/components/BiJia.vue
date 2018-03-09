<template>
  <div class="bijia">
      <p class="p1">比价</p>
      <div class="space">
          <div class="img-box">
              <img src="http://m.qpic.cn/psb?/V10C7AQj17nOSf/p2uYkxQ0LdxTpIUvAROcIXaKi7jcC3IETGtTQci3oIw!/b/dEUBAAAAAAAA&bo=3QDMAAAAAAADBzM!&rf=viewer_4"/>
          </div>
          <p>暂无比价数据</p>
      </div>
  </div>
</template>
<script>
export default {
  name: "BiJia"
};
</script>
<style lang="less" scoped>
.bijia {
  height: 21.21rem;
  .p1 {
    @h: 1.39rem;
    height: @h;
    line-height: @h;
    background: #f9f9f9;
    text-align: center;
    margin-bottom: 1.35rem;
  }
  .space {
    padding: 0 0.42rem;
    text-align: center;
    padding-top: 1.43rem;
    .img-box {
      width: 2.2rem;
      height: 2.04rem;
      margin-left: 3.85rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>


