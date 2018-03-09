<template>
  <div class="xuzhi">
     <p class="p1">须知</p>
      <ul>
          <li v-for="(item,i) in contlist" :key = "i">
              {{item.text}}
          </li>
      </ul>
      <p class="end">以上活动最终解释权归享多期所有。</p>
  </div>
</template>
<script>
export default {
  name: "XuZhi",
  props: {
    contlist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.xuzhi {
  .p1 {
    @h: 1.39rem;
    height: @h;
    line-height: @h;
    background: #f9f9f9;
    text-align: center;
  }
  ul {
      padding:0 0.42rem;
    margin-top: 0.3rem;
    li {
      font-size: 0.4rem;
      color: #686868;
      line-height: 0.7rem;
    }
  }
  .end{
      padding:0 0.42rem;
      margin-top:1.66rem;
      font-size:0.3rem;
      margin-bottom: 0.48rem;
      color:#999999;

  }
}
</style>


