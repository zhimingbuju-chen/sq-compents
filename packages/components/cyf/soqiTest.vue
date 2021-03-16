<template>
   <div>
      这是一个文本公用组件{{title}}
   </div>
</template>
<script>
export default{
  props: {
    title:{
      type:'String',
      default:'标题'
    }
  },
  data(){
    return{

    }
  },
  methods:{

  },
  mounted:function(){
  },

}
</script>

<style scoped>

</style>
