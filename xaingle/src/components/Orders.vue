<template>
  <div class="order">
      <div class="myoder">
          <div class="text">
              <span class="left">
                  我的订单
              </span>
              <p class="right">
                  <span>查看全部</span>
                  <span class="iconfont icon-arrow-right-copy-copy"></span>
              </p>
          </div>
          <ul>
             <router-link :to="{name:item.name}" v-for="(item,i) in iconlist" :key="i" tag ="li">
                 <a href="javascript:;">
                     <div class="iconfont" :class="item.icon"></div>
                     <p>{{item.text}}</p>
                 </a>
             </router-link> 
          </ul>
      </div>
      <div class="gift">
          <ul>
              <li>
                  <div class="text">
                    <span class="left">
                        我的优惠券
                    </span>
                    <p class="right">
                        
                        <span class="iconfont icon-arrow-right-copy-copy"></span>
                    </p>
                </div>

              </li>
              <li>
                  <div class="text">
                    <span class="left">
                        地址管理
                    </span>
                    <p class="right">
                        
                        <span class="iconfont icon-arrow-right-copy-copy"></span>
                    </p>
                </div>

              </li>
              <li>
                  <div class="text">
                    <span class="left">
                        邀请好友
                    </span>
                    <p class="right">
                        <span class="pink">你赚他也赚</span>
                        <span class="iconfont icon-arrow-right-copy-copy"></span>
                    </p>
                </div>

              </li>
          </ul>
      </div>
      <div class="love">
          <ul>
              <li>
                  <p>
                      <span class="iconfont icon-shoucang"></span>
                      <span>我收藏的</span>
                  </p>
              </li>
              <li>
                  <p>
                      <span class="iconfont icon-xihuan1"></span>
                      <span>我喜欢的</span>
                  </p>
              </li>
          </ul>

      </div>
       <div class="gift">
          <ul>
              <li>
                  <div class="text">
                    <span class="left">
                        我的客服
                    </span>
                    <div class="right">
                        <div class="time" style="font-size:0.3rem;">
                            <p>工作日9:00-21:00</p>
                            <p>双休日9:00-18:00</p>
                        </div>
                        
                        <span class="iconfont icon-arrow-right-copy-copy"></span>
                    </div>
                </div>

              </li>
              <li >
                  <div class="text">
                    <span class="left">
                        设置
                    </span>
                    <p class="right">
                        
                        <span class="iconfont icon-arrow-right-copy-copy"></span>
                    </p>
                </div>

              </li>
              
          </ul>
      </div>
      <br>
      <br>
      <br>
      <br>
      
  </div>
</template>
<script>
export default {
  name: "Orders",
  props: {
    iconlist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.order {
  @lh: 051rem;
  box-sizing: border-box;
  .padding() {
    padding-left: 0.44rem;
    padding-right: 0.69rem;
  }
  .border(){
      border-bottom: 0.3rem solid #ededed;
  }

  .text_style() {
    display: flex;
    justify-content: space-between;
    font-size: 0.51rem;
    padding-bottom: 0.51rem;
    border-bottom: 0.03rem solid #e2e2e2;
  }
  .text1_style{
      display: flex;
    justify-content: space-between;
    font-size: 0.51rem;
    padding-bottom: 0.51rem;
     padding-bottom: 0.51rem;
  }

  .myoder {
    .padding();
    .border();
    
    box-sizing: border-box;
    padding-top: 0.51rem;
    div.text {
      .text_style();

      .left {
        margin-left: 0.05rem;
      }

      .right {
        color: #9a9a9a;
      }
    }
    ul {
      box-sizing: border-box;
      padding-top: 0.5rem;
      padding-bottom: 0.52rem;
      text-align: center;
      display: flex;
      li {
        flex: 1;
        a {
          color: #000;
          .iconfont {
            font-size: 0.67rem;
          }
          p {
            font-size: 0.33rem;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
  .gift {
    .padding();
   .border();
    ul {
      li {
          .text1{
            .text1_style();  
          }

        .text {
          .text_style();
          padding-top: 0.52rem;
          .left {
            margin-left: 0.05rem;
          }

          .right {
            color: #9a9a9a;
            display: flex;
            
            .pink{
                color:#f3063a;
            }
          }
        }
      }
    }
  }
  .love{
      .padding();
      .border();
      ul{
          display:flex;
          li{
             
              flex:1;
              height:1.8rem;
              line-height:1.8rem;
              font-size:0.41rem;
              padding:0 0.97rem;
              &:nth-of-type(1){
                  border-right:0.02rem solid #cccccc;
              }


          }
      }
  }
}
</style>


