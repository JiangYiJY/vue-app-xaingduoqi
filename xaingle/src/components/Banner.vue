<template>
  <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div v-for="(item,i) in bannerList" :key="i" class="swiper-slide">
                <router-link :to="{name:'Detail',query:{goodsID:item.goodsID}}">
                    <img :src="item.imgSrc" :title="item.goodsName" />
                </router-link>
                <div class="text">
                  <p class="p1">{{item.title}}</p>
                  <p class="p2">{{item.content}}</p>
                </div>
            </div>
            
        </div>
        

        <div v-if="hasPag" class="swiper-pagination"></div>

        <div v-if="hasBtn" class="swiper-button-next"></div>
        <div v-if="hasBtn" class="swiper-button-prev"></div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  name: "Banner",
  props: {
    bannerList: {
      type: Array,
      required: true
    },
    auto: {
      type: Boolean,
      default: true
    },
    hasPag: {
      type: Boolean,
      default: true
    },
    hasBtn: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    var option = {};

    if (this.auto) {
      option.autoplay = true;
    }

    if (this.hasPag) {
      option.pagination = { el: ".swiper-pagination" };
    }

    if (this.hasBtn) {
      option.navigation = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      };
    }
    var swiper = new Swiper(".swiper-container", option);
  }
};
</script>
<style src="swiper/dist/css/swiper.css"></style>

<style lang="less" scoped>
.banner {
  height:9.93rem;
  @h:2.69rem;
  .text{
    height: @h;
    box-sizing: border-box;
    padding: 0.48rem 0;
    text-align: center;
    line-height: 0.76rem;
    .p1{
      font-size: 0.71rem;
    }
    .p2{
      font-size: 0.43rem;
    }
    
  }
}



// .swiper-pagination-fraction,
// .swiper-pagination-custom,
// .swiper-container-horizontal > .swiper-pagination-bullets {
//   bottom: -8px;
// }
</style>


