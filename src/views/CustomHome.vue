<template>
  <div>
      <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="demonstration">运单号</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in this.$store.state.parcelList"
                :key="item.id"
                :label="item.id"
                :value="item.id">
                </el-option>
            </el-select>
          </div>
       </el-col>
      <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="demonstration">预约时间</span>
            <el-date-picker
            v-model="date"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
            </el-date-picker>
          </div>
      </el-col>
      <el-col :span="6">
        <el-button type="success" @click="ensureReservation">确定预约</el-button>
      </el-col>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'CustomHome',
  components: {
    
  },
   computed:{
      getParcel(){
          return this.$store.state.parcelList;
      }
  },
  data(){
    return {
        date : null,
        value:'',
    }
  },
  methods:{
      ensureReservation:function(){
          console.log(this.date);
          console.log(this.value);
          let parcel = {
              id:this.value,
              appointmentTime:this.date,
              status : 1
          }
          this.$store.dispatch("ensureReservation",parcel);
          this.$router.go(-1);
      }
  },
  mounted:function(){
      let status = 0;
      this.$store.dispatch("getParcelListByStatus",status)
  },
  beforeRouteUpdate(to, from, next){
      this.$store.dispatch("getParcelListByStatus",status);
      next();
  }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
   
  }
  .bg-purple {
    
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

