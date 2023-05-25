<template>
  <div class="one_container">
    <div class="one_container_toolBar">
      <h2>词汇、评论统计</h2>
    </div>
    <div class="one_content">
      <el-image
        style="width: 500px; height: 500px"
        :src="one"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 500px; height: 500px"
        :src="two"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 500px; height: 500px"
        :src="seven"
        :fit="fit"
      >
      </el-image>
    </div>
  </div>
</template>

<script>
import one from '../assets/one.png';
import two from '../assets/two.png';
import seven from '../assets/seven.jpg';

export default {
  data() {
    return {
      one,
      two,
      seven
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.one_content {
  width: 1100px;
  .el-image {
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>
