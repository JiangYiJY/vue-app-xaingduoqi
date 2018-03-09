<template>
  <nav>
      <ul>
          <router-link v-for="(nav,i) in navlist" :key = "i" :to = "{name:nav.name}" activeClass = "active" tag="li">
              <a href="javascript:;">{{nav.text}}</a>
          </router-link>
      </ul>
  </nav>
</template>
<script>
import {mapState} from "vuex"
export default {
  name:"TopNav",
  props:{
      navlist:{
          type:Array,
          required:true
      }
  }
}
</script>
<style lang="less" scoped>
nav{
    box-sizing: border-box;
    padding:0 0.3rem;
    @h:1.42rem;
    ul{
    display: flex;
    li{
        height: @h;
        line-height: @h;
        text-align: center;
        flex:1;
        font-size: 0.42rem;
        a{
            color:#000;
        }
        &.active{
            a{
               color:#ff0139;
            }
        }
    }

    }

}
</style>


