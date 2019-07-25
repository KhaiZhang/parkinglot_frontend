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
      <template slot="header" slot-scope="scope">
          <el-button type="primary" @click="dialogFormVisible = true" >添加</el-button>
      </template>
      <template slot-scope="scope">
        <el-button size="mini"
          @click="ensureParcelBeToken(scope.$index, scope.row)" v-if="scope.row.status === '已预约'">确认取件</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
   <el-dialog title="添加包裹" :visible.sync="dialogFormVisible"  >
      <el-form :model="parcel">
        <el-form-item label="收件人姓名" :label-width="formLabelWidth">
          <el-input v-model="parcel.customName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="parcel.phoneNumner" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createNewParcel">确 定</el-button>
      </div>
    </el-dialog>
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
  data(){
    return {
      dialogFormVisible:false,
      parcel: {
          customName: '',
          phoneNumner: null
        },
        formLabelWidth: '120px'
    }
  },
  methods:{
      ensureParcelBeToken(index,row){
        this.$store.dispatch("ensureParcelBeToken",row);
      },
      createNewParcel(){
        // console.log(this.parcel.customName) //have input value
        // console.log(this.parcel.phoneNumner)//have input value
        // console.log(this.parcel) //  customName and  phoneNumner all null
        let parcel ={
          customName:this.parcel.customName,
          phoneNumner:this.parcel.phoneNumner
        }
        this.$store.dispatch("addNewParcel",parcel);
        this.dialogFormVisible = false;
        this.parcel.customName = "";
        this.parcel.phoneNumner = null;
      }
  }
}
</script>

<style scoped>
.el-dialog{
  margin: 0 auto;
}

</style>

