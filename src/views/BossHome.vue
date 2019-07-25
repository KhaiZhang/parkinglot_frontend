<template>
  <div>
    <el-container>
        <el-header>
            <SelectItem></SelectItem>
        </el-header>
        <el-main>
            <ParcelList></ParcelList>
        </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ParcelList from '../components/ParcelList.vue'
import SelectItem from '@/components/SelectItem.vue'

export default {
  name: 'BossHome',
  components: {
    ParcelList,
    SelectItem
  },
   mounted: function () {
        this.$nextTick(function () {
          this.$store.dispatch("getParcelList");
      })
    }
}
</script>

<style scoped>
    .el-main {
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
   .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
 
</style>

