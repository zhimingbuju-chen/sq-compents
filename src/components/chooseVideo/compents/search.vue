<!--搜索页面-->
<template>
  <div class="viewbox">
    <div class="flex-align-center nav-search">
      <van-icon name="arrow-left" @click="goBack"/>
      <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" class="flex"></van-search>
      <div class="searchStata" @click="onSearch">搜索</div>
    </div>
    <van-list class="wrapbox"  v-model="loading" :finished="searchFinished"  @load="onLoad" :class="{'flex-center':searchList.length ==0}">
      <template v-if="searchList.length >0">
        <!--视频列表-->
        <ul class="video-list">
          <li class="flex-align-center" v-for="(item,index) in searchList" :key="index">
            <div class="videoBox flex-center" @click="playVideo(item.fileName)">
              <img :src="item.coverPicture ? item.coverPicture : item.originUrl + '?vframe/jpg/offset/0'"
                   onerror="javascript:this.src='https://v-cdn-staticresources.soqi.cn/img_dy_defaultImg.jpg'" class="example_video" >
              <span class="iconbox"><van-icon name="Play"/></span>
            </div>
            <div class="flex" @click="chooseItem(item)">
              <h1 class="title">{{item.title}}</h1>
            </div>
          </li>
        </ul>
        <div class="dropload-load" v-if="searchFinished && searchList.length >0">亲,没有更多数据啦！</div>
      </template>
      <!--暂无数据-->
      <template v-else-if="searchFinished && isSearchStata">
        <div  class="empty-img">
          <img src="https://xmsoqistatic.qiniu.soqi.cn/mp_microvideo_noData.png">
          <p class="text-elli">很抱歉，没有相关微视频</p>
        </div>
      </template>
    </van-list>

    <!--搜索弹出框-->
    <van-popup v-model="showPop" position="right" :style="{width: '100%',height:'100%','background-color':'#000'}">
      <show-video :playUrl="playUrl" @goBack="showPop=false"></show-video>
    </van-popup>

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
      isSearchStata:{ //是否是搜索状态
        default:false,
        type:Boolean,
      }
    },
    data(){
      return {
        value:'',
        loading:false,

        showPop:false,
        playUrl:'',
      }
    },
    methods: {
      //播放地址
      playVideo(url){
        this.showPop = true;
        this.playUrl = url;
      },
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
      },
      //选中
      chooseItem(item){
        this.$emit('chooseItem',item);
      }
    },
  }
</script>
<style lang="scss" scoped src="../css/video.scss"></style>
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
  .searchStata{
    font-size:14px;padding:0 10px;color:#999;
  }

  /*空状态*/
  .empty-img{
    text-align:center;
    img{
      width:40px;margin:0 auto;
    }
    p{
      font-size:14px;color:#999;margin-top:10px;
    }
  }
</style>
