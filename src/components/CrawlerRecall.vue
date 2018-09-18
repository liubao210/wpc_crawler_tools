<template>
  <div class="TableBack">
    <el-table
      :data="tableData"
      class="eltable"
      stripe
      style="width: 70%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="site"
        label="Site"
        width="180">
      </el-table-column>
      <el-table-column
        prop="splitter"
        label="Splitter">
      </el-table-column>
      <el-table-column
        prop="brand"
        label="Brand">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="">查看</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2018-09-12',
          site: 'japan',
          splitter: 'workstation',
          brand: ''
        }, {
          date: '2018-09-14',
          site: 'keroa',
          splitter: 'workstation',
          brand: ''
        }, {
          date: '2018-09-11',
          site: 'russia',
          splitter: 'desktop',
          brand: 'thinkvision'
        }, {
          date: '2018-09-13',
          site: 'vietnam',
          splitter: 'laptop',
          brand: 'alianware'
        }]
      }
    }
  }
</script>
<style scoped>
.TableBack {
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
.eltable {
  margin-left: auto;
  margin-right: auto;
}
</style>
