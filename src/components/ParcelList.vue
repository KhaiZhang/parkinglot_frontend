<template>
  <div>
      <template>
  <el-table
    :data="getParcel"
    style="width:60%;margin:0 auto;">
    <el-table-column
      label="运单号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="收件人"
      prop="customName">
    </el-table-column>
    <el-table-column
      label="手机号"
      prop="phoneNumner">
    </el-table-column>
    <el-table-column
      label="状态"
      prop="status">
    </el-table-column>
    <el-table-column
      label="预约时间"
      prop="appointmentTime">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="ensureParcelBeToken(scope.$index, scope.row)" v-if="scope.row.status === '已预约'">确认取件</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'ParcelList',
  computed:{
      getParcel(){
          return this.$store.state.parcelList;
      }
  },
  methods:{
      ensureParcelBeToken(index,row){
          this.$store.dispatch("ensureParcelBeToken",row);
      }
  }
}
</script>

<style scoped>
</style>

