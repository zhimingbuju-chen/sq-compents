<!--展示-->
<template>
  <div class="viewbox">
    <a class="article-back flex-center" @click="goBack"><van-icon name="arrow-left" /></a>
    <div class="wrapbox">
      <!--视频-->
      <video :src="playUrl" ref="nowVideo" loop="loop" x5-video-player-fullscreen="true" x5-video-player-type="h5" x5-playsinline="" playsinline="" webkit-playsinline="" x-webkit-airplay="allow" poster="" v-if="isIOS"></video>
      <video :src="playUrl" ref="nowVideo" preload="" x5-video-player-type="h5-page" loop="loop" v-else></video>
      <div class="mask-bg flex-center" @click="playVideo">
        <span class="iconbox" v-if="!isPlay"><van-icon name="Play"/></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "showVideo",
  props:{
    isIOS:{ //是否是IOS端
      default:false,
      type:Boolean,
    },
    playUrl:{ //播放地址
      default:'',
      type:String,
    }
  },
  data(){
    return {
      isPlay:false,
    }
  },
  methods: {
    //视频的操作 开始
    playVideo:function(e){
      if(this.$refs.nowVideo.paused){
        this.$refs.nowVideo.play().then(()=>{
          console.log('播放成功')
          this.$emit('changePlay',true,this.index);
          this.isPlay = true;//默认图
        }).catch(()=>{
          console.log('播放失败')
        })
      }else{
        this.$refs.nowVideo.pause();
        this.isPlay = false;
      }
    },
    //返回
    goBack(){
      this.$emit('goBack');
    }

  }
}
</script>

<style lang="scss" scoped>
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .mask-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .iconbox{
    display: inline-block;
    width:80px;
    height:80px;
    line-height:92px;
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
      font-size:32px;
      color: #fff;
    }
  }
  .article-back{
    width: 40px;text-align:center;
    height:40px;border-radius:50%;
    background-color:rgba(255,255,255,0.2);
    position: absolute;
    left:10px;
    top: 20px;
    z-index: 199;
    i{
      color:#fff;
    }
  }
</style>
