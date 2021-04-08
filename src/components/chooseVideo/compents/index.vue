<template>
   <div class="fix-page">
     <router-view></router-view>
     <div class="viewbox">
       <van-nav-bar title="微视频选择" left-arrow class="choose-video-back" @click-left="goBack"/>
       <!--菜单切换-->
       <nav class="flexbox menu-nav">
         <div class="flex">
           <div class="menu" :class="{active:type==2}" @click="switchTopMenu(2)">
             <span>个人的</span>
           </div>
           <div class="menu" :class="{active:type==1}" @click="switchTopMenu(1)" v-if="isMirror">
             <span>同步的</span>
           </div>
         </div>
         <van-icon name="search" @click="jumpToSearch"  />
       </nav>
       <!--标签菜单-->
       <sign-type  :navList="videoLabelList" :checkId="videoCheckId" :videoStatistics="videoStatistics" @switchMenu="switchMenuVideo"></sign-type>
       <van-list class="wrapbox"  v-model="loading" :finished="finished"  @load="onLoad" :class="{'flex-center':list.length ==0}">
         <template v-if="list.length >0">
           <ul class="video-list">
             <li class="flex-align-center" v-for="(item,index) in list" :key="index">
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
           <div class="dropload-load" v-if="finished && list.length >0">亲,没有更多数据啦！</div>
         </template>
         <!--暂无数据-->
         <template v-if="list.length ==0">
           <div  class="empty-img">
             <img src="https://xmsoqistatic.qiniu.soqi.cn/mp_microvideo_noData.png">
             <p class="text-elli">很抱歉，没有相关微视频</p>
           </div>
         </template>
       </van-list>

       <!--搜索弹出框-->
       <van-popup v-model="showPop" position="right" :style="{ width: '100%',height:'100%','background-color':'#000'}">
          <show-video :playUrl="playUrl" @goBack="showPop=false"></show-video>
       </van-popup>
     </div>
   </div>
</template>

<script>
  import signType from '../compents/signType'; /*标签列表*/
  import searchList from '../compents/search'; /*标签列表*/
  import showVideo from '../compents/showVideo'; /*标签列表*/
  export default {
    name: "index",
    props:{
      type:{
        default:2,
        type:Number,
      },
      isMirror:{
        default:false,
        type:Boolean,
      },
      isIOS:{ //是否是IOS端
        default:false,
        type:Boolean,
      },
      videoCheckId:{ //当前选中的微视频标签ID
        default:0,
        type:Number,
      },
      videoLabelList:{ //视频标签列表
        default:[],
        type:Array,
      },
      videoStatistics:{ //视频总数
        default:0,
        type:Number,
      },
      list:{  //视频列表
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
    },
    data(){
      return {
        loading:false,
        showPop:false,
        playUrl:'',
      }
    },
    components: {
      signType,searchList,showVideo
    },
    methods: {
       //播放地址
      playVideo(url){
        this.showPop = true;
        this.playUrl = url;
      },
      //跳转到搜索页面
      jumpToSearch(){
        this.$emit('jumpToSearch');
      },
      //切换顶部标签
      switchTopMenu(type){
        this.$emit('switchTopMenu',type);
      },
      onLoad(){
        this.loading = false;
        this.$emit('onLoad');
      },
      switchMenuVideo(id){
        this.$emit('switchMenu',id);
      },
      //选中
      chooseItem(item){
        this.$emit('chooseItem',item);
      },
      //返回上一步
      goBack(){
        this.$emit('goBack');
      }

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

<style lang="scss" scoped src="../css/video.scss"></style>
<style lang="scss" scoped>
  .fix-page{
    height: 100%;
  }
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
        display:inline-block;height:38px;
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
  .choose-video-back{
    i{
      color:#424242;
    }
  }
</style>
