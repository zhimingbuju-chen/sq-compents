<!--标签类型展示-->
<template>
  <div class="signTypebox subscribeBox-signTypebox">
    <div class="signType-menu flexbox" v-show="type!=1">
      <swiper :options="swiperOption" ref="mySwiper" class="flex text-elli">
        <swiper-slide v-for="(value,index) in navList" :key="index" :class="{active:value.id == checkId}">
          <div class="text-elli" @click="switchMenu(value.id)">
            <span>{{value.labelName}}</span>
            <em v-if="value.id==0">({{videoStatistics}})</em>
          </div>
        </swiper-slide>
      </swiper>
      <van-icon name="more-open"  @click="type=1"/>
    </div>
    <!--全部一级菜单-->
    <div class="showFirstMenu" v-show="type==1">
      <div class="title flexbox">
        <div class="flex">全部分类</div>
        <van-icon name="cross" @click="type=0"/>
      </div>
      <ul class="firstMenu">
        <li v-for="(value,index) in navList" :key="index"  :class="{cur:value.id == checkId}" class="text-elli" @click="switchMenu(value.id)"><div class="text-elli">{{value.labelName}}</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props:["navList","checkId","videoStatistics"],
  data() {
    return {
      swiperOption: {
        initialSlide:0,
        slidesPerView:'auto',
      },
      type:0,//展示方式
      subShow:false,//是否展开全部菜单
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    //展示全部内容
    switchMenu(id){
      this.type = 0;
      this.$emit('switchMenu',id);
    },
    //展开全部三级菜单
    showThirdMenu(){
      this.subShow = true;
    },
    //隐藏三级
    hideThirdMenu(){
      this.subShow = false;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted(){

  },
  watch:{
    navList(){
      let that = this;
      this.navList.forEach((item,index) =>{
        if(this.checkId ==  item.id){
          console.log("滑动" + index);
          setTimeout(function () {
            that.swiper.slideTo(index);
          },300)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.signTypebox{
  position:relative;
  z-index:4;
}
.signType-menu{
  height:46px;background-color:#f8f8f8;
  .swiper-slide{
    font-size:16px;
    color:#999;
    div{
      height:46px;
      line-height:46px;
      position:relative;
    }
  }
  .swiper-slide.active{
    div:after{
      content:'';
      position:absolute;
      bottom:0;
      left:50%;
      -webkit-transform:translate(-50%,0);
      width:40px;
      height:3px;border-radius:4px;
      background-color:#1f8ff3;
    }
    div span{
      color:#1e8ff2;
    }
  }
  .van-icon-more-open{
    display:inline-block;
    width:40px;
    height:46px;
    line-height:42px;
    text-align:center;
    font-size:18px;
    color:#999;
  }
}
.showFirstMenu{
  height:46px;
  padding:5px 0;
  border-bottom:1px solid #eeeeee;
  .flex{
    padding:0 10px;
    font-size:16px;
    color:#424242;
    line-height:36px;
    font-weight:700;
  }
  .van-icon-cross{
    width:40px;
    height:36px;
    text-align:center;
    line-height:32px;
    border-left:1px solid #f2f2f2;
    color:#bbb;
  }
}
.firstMenu{
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  background-color:#fff;
  padding-bottom:20px;box-shadow: 0 15px 15px 0 rgba(0,0,0,0.2);
  li{
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex:0 0 25%;
    margin-top:15px;
    padding-right:10px;
    div{
      padding: 0 5px;
      position: relative;
      overflow: hidden;
      font-size:14px;
      color:#424242;
      background-color:#f5f5f5;
      height:30px;
      line-height:30px;
      border-radius:2px;
      text-align:center;
    }
  }
  li:nth-child(4n+4){
    padding-right:0;
  }
  li.cur{
    div{
      color:#1f8ff3;
    }
  }
}
.submenu.round{
  padding:15px 0 10px 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  li{
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    font-size:14px;
    color:#999;
    background-color:#f5f5f5;
    height:30px;
    line-height:30px;
    border-radius:15px;
    margin:0 10px 15px 0
  }
  li.cur{
    background-color:#1f8ff3;
    color:#fff;
  }
}
</style>
<style>
.subscribeBox-signTypebox .swiper-wrapper {position: relative;width: 100%; height: 100%;z-index: 1; display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex; display: flex; -webkit-transition-property: -webkit-transform; -moz-transition-property: -moz-transform;-o-transition-property: -o-transform;-ms-transition-property: -ms-transform;transition-property: transform;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;  }
.subscribeBox-signTypebox .swiper-slide{ display:inline-block;width:auto!important;padding:0 15px;border-radius:5px;-webkit-flex-shrink: 0;-ms-flex: 0 0 auto;flex-shrink: 0;position: relative;text-align:center;}
</style>
