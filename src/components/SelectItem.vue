<template>
  <div>
    <span id="title">菜鸟驿站</span>
    <span id="selection">
        <span class="select" @click="filterParcelList()" id='all'>ALL</span>
        <span  class="select" @click="filterParcelList()" id='appointment'>已预约</span>
        <span  class="select" @click="filterParcelList()" id='token'>已取件</span>
        <span  class="select" @click="filterParcelList()" id='unappointment'>未预约</span>
    </span>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'SelectItem',
  data(){
      return{
          selectType:null
      } 
  },
  
  methods:{
      filterParcelList:function(){

      }
  }
}
</script>

<style scoped>
 #title{
      float: left;
  }
  .select{
      margin-left: 30px;
      text-align: center;
      width: 120px;
      color:cornflowerblue;
  }

  #selection{
      float: right;
      margin-right: 400px;
  }
</style>

