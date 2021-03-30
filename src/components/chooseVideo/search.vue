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

  .video-list{
    li{
      padding:10px;position:relative;background-color:#fff;
      border-bottom:1px solid #f2f2f2;
      .flex{
        padding:0 10px;
        .title{
          font-size:15px;color:#424242;margin-bottom:10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          line-height:150%;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-word;
        }
        .sign-list{
          position:absolute;left:180px;bottom:15px;
          font-size:13px;color:#a0a1a3;
        }
      }
    }
  }
  .videoBox{
    position:relative;
    width:160px;height:110px;border-radius:5px;
    overflow:hidden;
    img{
      width:100%;
    }
    .iconbox{
      display: inline-block;
      width:40px;
      height:40px;
      line-height:44px;
      border-radius: 50%;
      background-color: black;
      opacity: 0.8;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      i{
        font-size:18px;
        color: #fff;
      }
    }
  }

</style>
