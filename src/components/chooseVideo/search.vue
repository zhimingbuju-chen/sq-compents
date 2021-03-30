<!--搜索页面-->
<template>
  <div class="viewbox">
    <div class="flex-align-center nav-search">
      <van-icon name="arrow-left" @click="goBack"/>
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" class="flex">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <van-list class="wrapbox"  v-model="loading" :finished="searchFinished"  @load="onLoad">
      <!--视频列表-->
      <ul class="video-list">
        <li class="flex-align-center" v-for="(item,index) in searchList" :key="index">
          <div class="videoBox flex-center">
            <img :src="item.coverPicture ? 'http://soqi-videos.qiniu.soqicn.com/'+item.coverPicture : item.originUrl + '?vframe/jpg/offset/0'" class="example_video">
            <span class="iconbox"><van-icon name="Play"/></span>
          </div>
          <div class="flex">
            <h1 class="title">{{item.title}}</h1>
          </div>
        </li>
      </ul>
      <div class="dropload-load" v-if="searchFinished && searchList.length >0">亲,没有更多数据啦！</div>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: "search",
    props:{
      searchList:{  //视频列表
        default:[],
        type:Array,
      },
      searchIsLoading:{
        default:false,
        type:Boolean,
      },
      searchFinished:{ //是否加载结束
        default:false,
        type:Boolean,
      },
    },
    data(){
      return {
        value:'',
        loading:false,
      }
    },
    methods: {
      onLoad(){
        this.$emit('onLoad');
      },
      //搜索
      onSearch(){
        this.$emit('onSearch',this.value);
      },
      //返回
      goBack(){
        this.$emit('goBack');
      }
    },
    watch:{
      searchIsLoading(){
        this.loading = this.searchIsLoading;
      }
    }

  }
</script>


<!--
<style lang="scss" scoped src="@/components/chooseVideo/css/video.scss"></style>
<style lang="scss" scoped>
  .nav-search{
     background-color:#fff;
     .flex{
       padding: 10px 0 10px 0!important;
     }
     .van-icon-arrow-left{
       display:inline-block;width:30px;
       text-align:center;font-size:20px;
     }
     .van-search__content{
       border-radius:20px;
     }
  }
</style>
-->
