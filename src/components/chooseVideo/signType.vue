<!--标签类型展示-->
<template>
  <div class="signTypebox subscribeBox-signTypebox">
    <div class="signType-menu flexbox" v-show="type!=1">
      <swiper :options="swiperOption" ref="mySwiper" class="flex text-elli">
        <swiper-slide v-for="(value,index) in navList" :key="index" :class="{active:value.id == checkId}">
           <div class="text-elli" @click="switchMenu(value.id)">{{value.labelName}}</div>
        </swiper-slide>
      </swiper>
      <van-icon name="Filter" @click="type=1"/>
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
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  export default {
    props:["navList","checkId"],
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
      Swiper,
      SwiperSlide,
    },
    methods: {
      //展示全部内容
      switchMenu(id){
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
  }
</script>

<style>
  .subscribeBox-signTypebox .swiper-wrapper {position: relative;width: 100%; height: 100%;z-index: 1; display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex; display: flex; -webkit-transition-property: -webkit-transform; -moz-transition-property: -moz-transform;-o-transition-property: -o-transform;-ms-transition-property: -ms-transform;transition-property: transform;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;  }
  .subscribeBox-signTypebox .swiper-slide{ display:inline-block;width:auto!important;padding:0 15px;border-radius:5px;-webkit-flex-shrink: 0;-ms-flex: 0 0 auto;flex-shrink: 0;position: relative;text-align:center;}
</style>
