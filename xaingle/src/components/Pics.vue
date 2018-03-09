<template>
  <div class="detail">
     <p class="p1">详情</p>
     <ul>
         <li v-for="(item,i) in piclist" :key = "i">
             <img :src="item.imgSrc" />
         </li>
     </ul>

  </div>
</template>
<script>
export default {
  name:"Pics",
  props:{
      piclist:{
          type:Array,
          required:true
      }
  }
}
</script>
<style lang="less" scoped>
.detail{
    .p1{
        @h:1.39rem;
        height:@h;
        line-height: @h;
        background:#f9f9f9;
        text-align: center;

    }
}
</style>


