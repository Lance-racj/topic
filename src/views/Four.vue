<template>
  <div>
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :before-upload="beforeUpload"
      :file-list="fileList"
      :auto-upload="false"
      :limit="1"
    >
      <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="upload">上传文件</el-button>
    </el-upload>

    <el-table :data="currentData">
      <el-table-column prop="Unnamed: 0" label="序号1"></el-table-column>
      <el-table-column prop="Unnamed: 0.1" label="序号2"></el-table-column>
      <el-table-column prop="用户id" label="用户id"></el-table-column>
      <el-table-column prop="评论内容" label="评论内容"></el-table-column>
      <el-table-column prop="评论类型" label="评论类型"></el-table-column>
      <el-table-column prop="归属主题" label="归属主题"></el-table-column>
      <el-table-column prop="是否参与主题" label="是否参与主题"></el-table-column>
      <!-- 添加更多列 -->
    </el-table>
    <el-pagination
      class="fp_pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fileList: [],
      tableData: [],
      size: 20,
      total: 0,
      currentPage: 1,
    };
  },
  computed: {
    currentData() {
      const startIndex = (this.currentPage - 1) * this.size;
      const endIndex = startIndex + this.size;
      return this.tableData.slice(startIndex, endIndex);
    }
  },
  methods: {
    handleChange(file) {
      this.fileList = [file.raw];
    },
    beforeUpload(file) {
      // 检查文件类型和大小等
      return true;
    },
    upload() {
      if (this.fileList.length === 0) {
        this.$message.error("请先选择文件");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        this.parseCSV(contents);
      };
      reader.readAsText(this.fileList[0]);
    },
    parseCSV(contents) {
      const rows = contents.split("\n");
      const headers = rows[0].split(",");
      const data = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(",");
        if (row.length === headers.length) {
          const item = {};
          for (let j = 0; j < headers.length; j++) {
            item[headers[j]] = row[j];
          }
          data.push(item);
        }
      }
      this.total = data.length;
      this.tableData = data;
    },
    handleSizeChange(val) {
      this.size = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  }
};
</script>

<style lang="less" scoped>

</style>
