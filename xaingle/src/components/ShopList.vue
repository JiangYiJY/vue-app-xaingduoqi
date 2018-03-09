<template>
  <div class="shoplist">
      <div class="title">
         
          <input type="checkbox" class="checkbox iconfont icon-zhengque" v-model="hascheck"  v-if="hascheck" />
          <input type="checkbox" class="checkbox iconfont icon-weixuanzhongyuanquan"  v-model="hascheck"  v-else />
          
         
          <!-- <span class="iconfont icon-zhengque" v-if="hascheck" ></span>
          <span class="iconfont icon-weixuanzhongyuanquan" v-else></span> -->
          <span>享多期精选</span>
      </div>
      <ul>
          <li v-for="(item,i) in newlist" :key = "i" >
              <a href="javascript:;">
                  <div class="left">
                    <input type="checkbox" class="checkbox iconfont icon-zhengque" v-model="item.isSelected"  v-if="item.isSelected" />
                     <input type="checkbox" class="checkbox iconfont icon-weixuanzhongyuanquan"  v-model="item.isSelected"  v-else />
                    <div class="img-box">
                        <img :src="item.imgSrc" />
                    </div>
                 </div>
                <div class="right">
                    <p class="p1">{{item.desc}}</p>
                    <p class="color" v-if="item.color">{{item.color}}</p>
                    <div class="maincontent">
                        <div class="m-left">
                            <span>￥{{item.price}}</span>
                        </div>
                        <div class="m-right">
                            <a href="javascript:;"  @click="numUpdate(i,false)">-</a>
                            <input type="text"   v-model="item.num"/>
                            <a href="javascript:;" @click="numUpdate(i,true)">+</a>
                            
                        </div>
                    </div>
                </div>
              </a>
              
          </li>
      </ul>
      <footer>
            <div class="left">
                <input type="checkbox" class="checkbox iconfont icon-zhengque" v-model="isAll"  v-if="isAll" />
                <input type="checkbox" class="checkbox iconfont icon-weixuanzhongyuanquan"  v-model="isAll"  v-else />
                <span class="all">全选</span>
                <span>合计：</span>
                <span class="price">{{allPrice}}</span>
            </div>
            <div class="right1" v-if="hasNum">
                <a href="javascript:;">结算({{num}})</a>
                
            </div>
            <div class="right2" v-else>
                <a href="javascript:;">结算({{num}})</a>
                
            </div>
        </footer>
  </div>
</template>
<script>
export default {
  name: "ShopList",
  props: {
    list: {
      type: Array,
      required: true
    },
    
  },
  data() {
    return {
      check: false,
      hascheck:true,
      hasNum: true,
      allcheck:false,
      count:0,
      allprice:0,
      newlist:[],
       isAll : false
    };
  },
  watch : {
      isAll(){
          this.newlist.map((item,i)=>{
              this.newlist[i].isSelected = this.isAll;
          })
      }
  },
  computed:{
      num(){
          var count = 0;
          this.newlist.map(item=>{
              if(item.isSelected){
                  count += item.num;
              }
          });
          if (count==0) {
              this.hasNum = false;
              
          }else{
              this.hasNum = true;
          }

          return count;
      },
      allPrice(){
          var price = 0;
          this.newlist.map(item=>{
              if(item.isSelected){
                  price += item.num*item.price;
              }
          });

          return price;
      }
  },
  methods : {
      numUpdate(index,isAdd){
          //如果是加号
          if(isAdd){
              this.newlist[index].num++
          }else if(this.newlist[index].num > 1){
              this.newlist[index].num--
          }
      }
  },
  mounted(){
       this.newlist = this.list;
  }
};
</script>
<style lang="less" scoped>
.shoplist {
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
      width: 7.2rem;
      box-sizing: border-box;
      padding-left: 0.37rem;
      .iconfont {
        color: red;
      }
      .checkbox {
        border: 0;
        outline: none;
        -webkit-appearance: none;
      }
      .icon-weixuanzhongyuanquan {
        color: #e2e2e2;
      }
      span {
        margin-right: 0.2rem;
      }
      .price {
        color: red;
      }
    }
    .right1 {
      width: 3.62rem;
      text-align: center;
      .bg();
      a {
        color: #fff;
      }
    }
    .right2 {
      width: 3.62rem;
      text-align: center;
      background: #e2e2e2;
      a {
        color: #fff;
      }
    }
  }
  .icon-weixuanzhongyuanquan {
    color: #e2e2e2 !important;
  }
  .title {
    box-sizing: border-box;
    padding: 0.37rem;
    @h: 0.83rem;
    span {
      height: @h;
      line-height: @h;
    }
    .checkbox {
      border: 0;
      outline: none;
      -webkit-appearance: none;
    }

    background: #f9f9f9;
    .iconfont {
      color: red;
      margin-right: 0.29rem;
    }
  }
  ul {
    margin-bottom: 2rem;
    li {
      padding: 0.45rem 0.37rem;
      border-bottom: 0.02rem solid #e2e2e2;
      &:nth-last-of-type(1) {
        border: 0;
      }
      a {
        display: flex;
        align-items: center;
        .checkbox {
          border: 0;
          outline: none;
          -webkit-appearance: none;
        }
        .left {
          display: flex;
          .iconfont {
            align-self: center;
            color: red;
            margin-right: 0.29rem;
          }
          .img-box {
            width: 2.35rem;
            height: 2.35rem;
            margin-right: 0.25rem;
          }
        }
        .right {
          box-sizing: border-box;
          padding-left: 0.37rem;
          .p1 {
            color: #000;
            line-height: 0.6rem;
          }
          .color {
            font-size: 0.31rem;
            color: #a8a8a8;
          }
          .maincontent {
            display: flex;
            justify-content: space-between;
            .m-left {
              color: #fa293c;
              margin-top: 0.32rem;
            }
            .m-right {
              display: flex;
              input {
                width: 1.1rem;
                height: 0.79rem;
                border: 0;
                text-align: center;
                border-top: 0.01rem solid #bbbbbb;
                border-bottom: 0.01rem solid #bbbbbb;
              }
              a {
                width: 0.74rem;
                height: 0.79rem;
                text-align: center;
                line-height: 0.79rem;
                background: #f5f5f5;
                display: block;
                border: 0.01rem solid #bbbbbb;
                color: #000;
                font-size: 0.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>


