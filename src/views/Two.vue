<template>
  <div class="two_container">
    <div class="two_container_toolBar">
      <h2>聚类降维分析</h2>
    </div>
    <div class="two_content">
      <el-image
        style="width: 500px; height: 500px"
        :src="three"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 500px; height: 500px"
        :src="four"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 500px; height: 500px"
        :src="five"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 500px; height: 500px"
        :src="six"
        :fit="fit"
      >
      </el-image>
    </div>
  </div>
</template>

<script>
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';

export default {
  data() {
    return {
      three,
      four,
      five,
      six
    };
  }
};
</script>

<style lang="less" scoped>
.two_content {
  width: 1100px;
  .el-image {
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>
