<template>
  <div class="three_container">
    <div class="three_container_toolBar">
      <h2>新话题预测</h2>
    </div>
    <div class="three_content">
      <el-image
        style="width: 570px; height: 500px"
        :src="eight"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="nine"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="ten"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="eleven"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="twelve"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="thirteen"
        :fit="fit"
      >
      </el-image>
      <el-image
        style="width: 570px; height: 500px"
        :src="fourteen"
        :fit="fit"
      >
      </el-image>
    </div>
  </div>
</template>

<script>
import eight from '../assets/eight.png';
import nine from '../assets/nine.png';
import ten from '../assets/ten.png';
import eleven from '../assets/eleven.png';
import twelve from '../assets/twelve.png';
import thirteen from '../assets/thirteen.png';
import fourteen from '../assets/forteen.png';

export default {
  data() {
    return {
      eight,
      nine,
      ten,
      eleven,
      twelve,
      thirteen,
      fourteen
    };
  }
};
</script>

<style lang="less" scoped>
.three_content {
  width: 1200px;
  .el-image {
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>
