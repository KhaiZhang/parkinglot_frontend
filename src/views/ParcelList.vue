<template>
  <div>
    <table>
    <tr>
        <th>运单号</th>
        <th>手机号</th>
        <th>状态</th>
        <th>预约时间</th>
    </tr>
    <tr  v-for="(item,index) in getParcel" v-bind:key="index" >
        <td>{{item.customName}}</td>
        <td>{{item.phoneNumner}}</td>
        <td>{{item.status}}</td>
        <td>{{item.createTime}}</td>
        <button>确认收货</button>
    </tr>
    </table>
    <!-- <ol class ="list" >
      <li>
        <span>运单号</span>
        <span>手机号</span>
        <span>状态</span>
        <span>预约时间</span>
      </li>
      <li v-for="(item,index) in getParcel" v-bind:key="index"  >
        <span>{{item.customName}}</span>
        <span>{{item.phoneNumner}}</span>
        <span>{{item.status}}</span>
        <span>{{item.createTime}}</span>
        <button>确认收货</button>
      </li>
    </ol> -->
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


  }
}
</script>

<style scoped>
    span {
        margin-left: 
    }
</style>

