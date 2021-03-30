<template>
  <div class="viewbox">
    <van-nav-bar title="微视频选择" left-arrow/>
    <!--菜单切换-->
    <nav class="flexbox menu-nav">
      <div class="flex">
        <div class="menu active">
          <span>个人的</span>
        </div>
        <div class="menu">
          <span>同步的</span>
        </div>
      </div>
      <van-icon name="search" @click="showPop = true" />
    </nav>
    <van-list class="wrapbox"  v-model="loading" :finished="finished"  @load="onLoad">
      <!--标签菜单-->
      <sign-type  :navList="videoLabelList" :checkId="videoCheckId"  @switchMenu="switchMenuVideo"></sign-type>
      <!--使用插槽-->
      <slot v-if="isSlot"></slot>
      <!--不使用插槽视频列表-->
      <ul class="video-list" v-else>
        <li class="flex-align-center" v-for="(item,index) in list" :key="index">
          <div class="videoBox flex-center">
            <img :src="item.coverPicture ? 'http://soqi-videos.qiniu.soqicn.com/'+item.coverPicture : item.originUrl + '?vframe/jpg/offset/0'" class="example_video">
            <span class="iconbox"><van-icon name="Play"/></span>
          </div>
          <div class="flex">
            <h1 class="title">{{item.title}}</h1>
<!--            <p class="sign-list">励志</p>-->
          </div>
        </li>
      </ul>
      <div class="dropload-load" v-if="finished && list.length >0">亲,没有更多数据啦！</div>
    </van-list>
    <!--搜索弹出框-->
    <van-popup v-model="showPop" position="right" :style="{ width: '100%',height:'100%'}">
       <search-list :searchList="searchList" :searchIsLoading="searchIsLoading" :searchFinished="searchFinished"  @onSearch="onSearch"  @onLoad="searchOnload" @goBack="showPop = false"></search-list>
    </van-popup>
  </div>
</template>

<script>
  import signType from '../chooseVideo/signType'; /*标签列表*/
  import searchList from '../chooseVideo/search'; /*标签列表*/
  export default {
    name: "index",
    props:{
      videoCheckId:{ //当前选中的微视频标签ID
        default:0,
        type:Number,
      },
      videoLabelList:{ //视频标签列表
        default:[],
        type:Array,
      },
      list:{  //视频列表
        default:[],
        type:Array,
      },
      searchList:{  //搜索视频列表
        default:[],
        type:Array,
      },
      isSlot:{  //是否使用插槽
        default:false,
        type:Boolean,
      },
      isLoading:{
        default:false,
        type:Boolean,
      },
      finished:{ //是否加载结束
        default:false,
        type:Boolean,
      },
      searchIsLoading:{ //搜索加载
        default:false,
        type:Boolean,
      },
      searchFinished:{ //搜索结束
        default:false,
        type:Boolean,
      }


    },
    data(){
      return {
        showPop:false,
        loading:false,
      }
    },
    components: {
      signType,searchList
    },
    methods: {
       //搜索
      searchOnload(){
        this.$emit('searchOnload');
      },
      onLoad(){
        this.$emit('onLoad');
      },
      switchMenuVideo(id){
        this.$emit('switchMenu',id);
      },
      //搜索
      onSearch(value){
        this.$emit('onSearch',value);
      },
    },
    watch:{
      isLoading(){
        console.log("监听");
        this.loading = this.isLoading;
      }
    },
    mounted:function(){

    }
  }
</script>

<style lang="scss" scoped src="@/components/chooseVideo/css/video.scss"></style>
<style lang="scss" scoped>
  .van-nav-bar{
     .van-nav-bar__left{
       color: #424242;
     }
  }
  .menu-nav{
    height:40px;line-height:40px;background-color:#fff;
    .menu{
      display:inline-block;width:90px;text-align:center;
      font-size:15px;color:#989898;
      span{
        display:inline-block;height:40px;
      }
    }
    .menu.active{
      color:#424242;
      span{
        border-bottom:3px solid #1e8ff2;
        border-radius:2px;
      }
    }
    .van-icon-search{
      font-size:24px;color:#c5c5c7;line-height:40px;padding:0 10px;
    }
  }
</style>
