<template>
  <div>
    <span id="title">菜鸟驿站</span>
    <span id="selection">
        <span class="select" @click="filterParcelList" id='all'>ALL</span>
        <span  class="select" @click="filterParcelList" id='appointment'>已预约</span>
        <span  class="select" @click="filterParcelList" id='token'>已取件</span>
        <span  class="select" @click="filterParcelList" id='unappointment'>未预约</span>
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
      filterParcelList:function(event){
        let status;
        switch(event.target.id){
          case this.CONSTANT.SELECT_TYPE_ALL :
            status = -1;
            break;
          case this.CONSTANT.SELECT_TYPE_TOKEN:
            status = 2;
            break;
          case this.CONSTANT.SELECT_TYPE_MAKEN_APPOINTMENT_TIME:
            status = 1;
            break;
          case this.CONSTANT.SELECT_TYPE_NO_APPOINTMENT_TIME:
            status = 0;
            break;
        }
        if(status == -1){
          this.$store.dispatch("getParcelList");
        }
        else {
          this.$store.dispatch("getParcelListByStatus",status)
        }
        
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

