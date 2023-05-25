<template>
  <el-container>
    <el-aside width="220px">
      <div class="title">
        <h2>话题趋势预测可视化系统</h2>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/one">
          <i class="el-icon-location"></i>
          <span slot="title">词汇、评论统计</span>
        </el-menu-item>
        <el-menu-item index="/two">
          <i class="el-icon-menu"></i>
          <span slot="title">聚类降维分析</span>
        </el-menu-item>
        <el-menu-item index="/three">
          <i class="el-icon-setting"></i>
          <span slot="title">新话题预测</span>
        </el-menu-item>
        <el-menu-item index="/four">
          <i class="el-icon-setting"></i>
          <span slot="title">新话题参与预测</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="info">
          <p>管理员lihuzhi</p>
          <el-button type="danger" size="small" @click="logOut" icon="el-icon-switch-button">退出</el-button>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      role: '',
      nickName: '',
      currentPath: this.$route.path
    }
  },
  created() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { role, nickName } = JSON.parse(userInfo);
      this.role = role === 0? '超级管理员': '管理员';
      this.nickName = nickName;
    } else { // 缓存中没有说明没登录，返回登录
      this.$router.push('/login')
    }
  },
  methods: {
    logOut() {
      this.$router.push('/login');
    },
    handleSelect(path) {
      if (path !== this.currentPath) {
        this.$router.push(path);
        this.currentPath = path;
      }
    }
  }
}
</script>

<style lang="less">
  .el-header {
    background-color: #99CCFF;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    .info {
      display: flex;
      align-items: center;
      .el-button {
        margin-left: 20px;
      }
    }
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    height: 100vh;
    .title {
      display: flex;
      padding: 12px 0;
      justify-content: center;
      align-items: middle;
      background: #545c64;
      color: #fff;
      // img {
      //   height: 34px;
      //   margin-right: 10px;
      // }
      // img:hover {
      //   transform: rotate(666turn);
      //   transition-delay: 1s;
      //   transition-property: all;
      //   transition-duration: 59s;
      //   transition-timing-function: cubic-bezier(.34,0,.84,1)
      // }
      h2 {
        font-size: 16px;
        font-family:Georgia, 'Times New Roman', Times, serif;
        line-height: 34px;
      }    
    }
  }
  
  .el-main {
    background-color: #FFFFFF;
    color: #333;
    // text-align: center;
    height: calc(100vh - 60px);
  }
</style>