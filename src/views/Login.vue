<template>
  <div class="body">
    <img class="log_bg" src="../assets/login-bg.jpg" alt="">
    <div class="form">
      <h2>话题趋势预测系统</h2>
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      <el-input v-model="topic" placeholder="请输入话题"></el-input>
      <div class="handle">
        <el-button @click="submit" type="primary">登录</el-button>
        <el-button type="warning">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      topic: ''
    }
  },
  methods: {
    async submit() {
      this.$message.success(`登录成功`)
      this.$router.push('/home');
    }
  }
}
</script>

<style lang="less" scoped>
  .body {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .log_bg {
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 10;
    }
    .form {
      position: absolute;
      z-index: 11;
      padding: 20px 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      h2 {
        margin-bottom: 20px;
        color: aliceblue;
      }
      .el-input {
        margin-bottom: 15px;
        width: 300px;
      }
      .handle {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
      .el-button {
        width: 100px;
      }
    }
  }
</style>