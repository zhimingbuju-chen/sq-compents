<!--测试内容 -->
<template>
  <choose-video :videoCheckId="videoCheckId" :videoLabelList="videoLabelList" :list="list"  :isLoading="isLoading" :finished="finished"
    :searchList="searchList" :searchIsLoading="searchIsLoading" :searchFinished="searchFinished"
    @onLoad="onLoad" @searchOnload="searchOnload"  @onSearch="onSearch" @switchMenu="switchMenuVideo">
  </choose-video>
</template>

<script>
import chooseVideo from '../chooseVideo/index';
export default {
  name: "index",
  data(){
    return {
      videoCheckId:0,//当前选中的微视频标签ID
      videoLabelList:[],//视频标签列表
      list:[],//视频列表

      limit:0,//开始节点
      offset:20,//开始数量
      finished:false,//是否加载完毕
      isLoading:false,//加载中

      searchVal:'',//搜索词
      searchLimit:0,//搜索开始节点
      searchFinished:false,//是否加载完毕
      searchIsLoading:false,//加载中
      searchList:[],//搜索列表

      isMirror:true,//是否是母名片
    }
  },
  components: {
    chooseVideo
  },
  methods: {
    //加载数据
    onLoad(){
      let that = this;
      setTimeout(function (){
        console.log("加载数据");
        that.getList();
      },300)
    },
    //切换标签
    switchMenuVideo(id){
      console.log("切换标签");
      this.limit = 0;
      this.finished = false;
      this.list = [];
      this.videoCheckId = id;
      this.getList();
    },
    //根据视频标签分类获取视频列表
    async getList(){
      this.isLoading = false;
      let list =[{"id":1607,"originUrl":"https://aweme.snssdk.com/aweme/v1/playwm/?s_vid=93f1b41336a8b7a442dbf1c29c6bbc56290e81b77f5b8eda881165e3fbc095a4e5aeebfb8e46f6946c16c33f20aef1220e9896d4972401f600bc5433bbcd9b7b&line=0","originCoverPicture":"https://p1.pstatp.com/large/tos-cn-p-0015/f9bb87e81ef249da88aa4ccfc60d23cc_1587117170.jpg","fileName":"20200518/b90175c13f034214bd74fcc6d3eebbe4.mp4","coverPicture":"20200518/b90175c13f034214bd74fcc6d3eebbe4.jpg","title":"w","describe":"w","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/7e83c2d8be214e4d8a44eb9f212ff89c.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","playVolume":2,"isHomeShow":1,"sort":10,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":"","isDel":1,"isSync":0,"isDraft":0,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1616744625000,"updateTime":1616744631000,"videoViolation":null},{"id":1568,"originUrl":"https://xmsoqistatic.qiniu.soqicn.com/temp_mp_microVideo_4248091c03b04e7c1585037880073.mp4","originCoverPicture":null,"fileName":"user_upload_video_5c16c861074241dcbbbde2eef0c68147.mp4","coverPicture":null,"title":null,"describe":null,"ad":null,"playVolume":5,"isHomeShow":1,"sort":9,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":null,"isDel":1,"isSync":0,"isDraft":1,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1614848460000,"updateTime":1615454710000,"videoViolation":null},{"id":1567,"originUrl":"https://xmsoqistatic.qiniu.soqicn.com/temp_mp_microVideo_bced1db4ed3d169f1585037843119.mp4","originCoverPicture":null,"fileName":"user_upload_video_ec4e2a4717b844c4b3bcd1affbfa4fc3.mp4","coverPicture":null,"title":null,"describe":null,"ad":null,"playVolume":1,"isHomeShow":1,"sort":8,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":null,"isDel":1,"isSync":0,"isDraft":1,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1614848350000,"updateTime":1614848365000,"videoViolation":null},{"id":1566,"originUrl":"https://xmsoqistatic.qiniu.soqicn.com/temp_mp_microVideo_35d4e9ad3548023a1614838048312.mp4","originCoverPicture":null,"fileName":"user_upload_video_0535578eeefa4f508eca720af26a48bb.mp4","coverPicture":"video_30de358e92cac19eb3ba9cb7297e4a30.png","title":"ccc","describe":"cc","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/d13c9605c92243a2af5e493591b27f41.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","playVolume":39,"isHomeShow":1,"sort":7,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":"","isDel":1,"isSync":0,"isDraft":0,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1614838073000,"updateTime":1616744631000,"videoViolation":null},{"id":1550,"originUrl":"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f410000bt7kv5gmmofc5c7mgbug&ratio=720p&line=0","originCoverPicture":"https://p26.douyinpic.com/tos-cn-p-0015/a1fb7b6a17a54cc3b3b1212278a94f21_1599034450~tplv-dy-360p.jpeg?from=2563711402","fileName":"mv/20209/dou_yin_564485573b3b4dcb91066b86dfe224cf.mp4","coverPicture":"mv/20209/dou_yin_3544569c09e04302a061e734abbf40ec.jpg","title":"聪明的不如劲儿大的～ #萌宠出道计划 #独特小田园","describe":"","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/5c26a35fa56641aab88d2a0c0c9e8924.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","playVolume":19,"isHomeShow":1,"sort":4,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":"","isDel":1,"isSync":0,"isDraft":0,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1610769585000,"updateTime":1616484052000,"videoViolation":null},{"id":1548,"originUrl":"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fa10000bsv4uuv88r4tle25sc8g&ratio=720p&line=0","originCoverPicture":"https://p29.douyinpic.com/tos-cn-p-0015/a061a9be8e664ace97ea4bf94db0cf16_1597919149~tplv-dy-360p.jpeg?from=2563711402","fileName":"mv/20211/dou_yin_982bd7f730084228983a731701317e29.mp4","coverPicture":"mv/20211/dou_yin_701bcfff82dd40a991b8e4a21d94ac77.jpg","title":"人的一生啊，就一堆堆坎坷~危险操作，请勿模仿！注意安全第一！","describe":"","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/5c26a35fa56641aab88d2a0c0c9e8924.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","playVolume":17,"isHomeShow":1,"sort":3,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":"","isDel":1,"isSync":0,"isDraft":0,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":1,"typeName":null,"addTime":1610768745000,"updateTime":1616569658000,"videoViolation":null},{"id":1547,"originUrl":"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fa80000bri6m17iv428anrhqv4g&ratio=720p&line=0","originCoverPicture":"https://p29.douyinpic.com/tos-cn-p-0015/eb05153751d349968fdb21480a50653d_1592027953~tplv-dy-360p.jpeg?from=2563711402","fileName":"mv/20209/dou_yin_8e0c3045d2254cc79202bb7479596213.mp4","coverPicture":"mv/20209/dou_yin_6adc75df660e41aa91e2ab31e2ff3fdf.jpg","title":"熬夜也要看完的十部美剧推荐，下期更精彩 #热门 #追剧 #拯救片慌","describe":"","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/5c26a35fa56641aab88d2a0c0c9e8924.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","playVolume":21,"isHomeShow":1,"sort":2,"topSort":0,"portraitName":"7e83c2d8be214e4d8a44eb9f212ff89c.jpg","versionIcon":"<i class=\"ic-pubfont ic-org ic-org-manage\"></i>","mpLink":"/6AE01DEB8D4B35FB7CB0BCD31B48A3E7/szone","phoneIdEcr":"6AE01DEB8D4B35FB7CB0BCD31B48A3E7","ringMaterial":"fddddddddddddddddddddd","isDel":1,"isSync":0,"isDraft":0,"processingProgress":1,"lock":false,"typeId":1,"isWxPlay":0,"typeName":null,"addTime":1610768724000,"updateTime":1616726073000,"videoViolation":null}];
      this.list = [...this.list,...list];
      this.limit +=list.length;
      this.finished = true;
      console.log("列表",this.list);
    },
    //搜索
    onSearch(value){
      console.log("搜索>>>>>>>>:"+value);
      this.searchIsLoading = false;
      this.searchVal = value;
      let list = [{"id":1607,"pid":12674006,"logId":0,"originUrl":"https://aweme.snssdk.com/aweme/v1/playwm/?s_vid=93f1b41336a8b7a442dbf1c29c6bbc56290e81b77f5b8eda881165e3fbc095a4e5aeebfb8e46f6946c16c33f20aef1220e9896d4972401f600bc5433bbcd9b7b&line=0","originCoverPicture":"https://p1.pstatp.com/large/tos-cn-p-0015/f9bb87e81ef249da88aa4ccfc60d23cc_1587117170.jpg","fileName":"20200518/b90175c13f034214bd74fcc6d3eebbe4.mp4","coverPicture":"20200518/b90175c13f034214bd74fcc6d3eebbe4.jpg","title":"w","describe":"w","ad":"{\"classify\":0,\"icon\":\"http://portrait.qiniu.soqicn.com/7e83c2d8be214e4d8a44eb9f212ff89c.jpg-img120?t=20171220\",\"id\":12674006,\"type\":0}","ringMaterial":"","playVolume":2,"buttonType":1,"isHomeShow":1,"isDraft":0,"sort":10,"topSort":0,"isSync":0,"dataOrigin":2,"syncVideoId":0,"typeId":1,"processingProgress":1,"typeName":null,"shareImg":null,"reviewState":2,"isWxPlay":1,"addTime":1616744625000,"updateTime":1616744631000}];
      this.searchList = [...this.searchList,...list];
      this.searchLimit+=list.length;
      this.searchFinished = true;
    },
    //搜索页面加载
    searchOnload(){
      let that = this;
      setTimeout(function (){
        console.log("加载数据");
        that.onSearch();
      },300)
    },
  },
  mounted:function(){
    this.videoLabelList = [{"id":0,"labelName":"全部","sortVal":-3},{"id":1029,"labelName":"搞笑","sortVal":-3},{"id":1028,"labelName":"婚纱摄影","sortVal":-2},{"id":1014,"labelName":"名片操作教程","sortVal":-1},{"id":238,"labelName":"健康","sortVal":0},{"id":352,"labelName":"保健品","sortVal":1},{"id":346,"labelName":"热点","sortVal":2},{"id":231,"labelName":"励志","sortVal":3},{"id":246,"labelName":"教育","sortVal":4},{"id":225,"labelName":"人生哲学","sortVal":5},{"id":995,"labelName":"管理","sortVal":6},{"id":241,"labelName":"美食","sortVal":7},{"id":994,"labelName":"销售","sortVal":8},{"id":217,"labelName":"趣味搞笑","sortVal":9},{"id":347,"labelName":"防控疫情","sortVal":10},{"id":226,"labelName":"口腔护理","sortVal":11},{"id":716,"labelName":"美丽世界","sortVal":12},{"id":253,"labelName":"情感","sortVal":13},{"id":259,"labelName":"阅读","sortVal":14},{"id":257,"labelName":"基因","sortVal":15},{"id":254,"labelName":"美发","sortVal":16},{"id":264,"labelName":"美容护肤","sortVal":17},{"id":788,"labelName":"保险","sortVal":18},{"id":263,"labelName":"减肥","sortVal":19},{"id":785,"labelName":"茶","sortVal":20},{"id":776,"labelName":"酒","sortVal":21},{"id":223,"labelName":"科普小知识","sortVal":22},{"id":258,"labelName":"房地产","sortVal":23},{"id":222,"labelName":"时尚穿搭","sortVal":25},{"id":224,"labelName":"风水玄学","sortVal":26},{"id":239,"labelName":"旅游","sortVal":27},{"id":240,"labelName":"摄影","sortVal":28},{"id":243,"labelName":"花艺","sortVal":29}];
    this.getList();
  }
}
</script>

<style scoped>

</style>
