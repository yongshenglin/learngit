<template>
  <div class="hello">
    <div class="container">

      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="formLabelAlign">
        <el-form-item label="用户名：">
          <el-input v-model="formLabelAlign.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password"
                    v-model="formLabelAlign.password"
                    placeholder="请输入密码"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model.number="formLabelAlign.phoneNum"
                    placeholder="手机号码登录">
          </el-input>
          <el-input v-model.number="formLabelAlign.checkNum"
                    placeholder="手机验证码">
          </el-input>
          <el-button type="primary"
                     v-model.number="formLabelAlign.checkNum"
                     @click="handleCheckNum">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">登录</el-button>
          <el-button type="primary"
                     @click="onSubmitNum">手机号登录</el-button>
          <el-button @click="handleRegister">注册</el-button>
        </el-form-item>
      </el-form>
      <!-- <el-alert title="登录成功"
                type="success"
                v-if="LoginIn">
      </el-alert>
      <el-alert title="登录失败"
                type="error"
                v-else>
      </el-alert> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        username: this.username,
        password: this.password,
        phoneNum: this.phoneNum,
        checkNum: ''
        // 属性必须和当前data绑定，从而和vuex双向绑定
      }
    }
  },
  computed: {
    // 将vuex中state方法映射到当前组件计算属性中
    ...mapState(['username', 'password', 'phoneNum'])
  },
  watch: {
    // 监听data中属性，然后提交，改变vuex的值
    'formLabelAlign.username' (value) {
      this.$store.commit('usernameChange', value)
    },
    'formLabelAlign.password' (value) {
      this.$store.commit('passwordChange', value)
    },
    'formLabelAlign.phoneNum' (value) {
      this.$store.commit('phoneNumChange', value)
    }
  },
  methods: {
    // 将vuex中actions方法映射到当前组件
    ...mapActions(['usernameChange', 'passwordChange', 'phoneNumChange']),
    onSubmit () {
      const uname = this.formLabelAlign.username
      console.log(uname)
      const pwd = this.formLabelAlign.password
      console.log(pwd)
      this.$axios({
        method: 'post',
        url: 'https://test.52hbl.com/index.php/index/wxapp.login/simple',
        data: {
          username: uname,
          password: pwd
        }
      }).then(this.getLoginSucc)
    },
    getLoginSucc (res) {
      res = res.data
      console.log(res)
      if (res && res.code === 0) {
        // console.log('success')
        this.$router.push('/index')
        // this.LoginIn = true
      } else {
        alert(res.msg)
        // this.LoginIn = false
      }
    },
    handleCheckNum () {
      const phone = this.formLabelAlign.phoneNum
      // console.log(phoneNum)
      // console.log(typeof phoneNum)
      this.$axios({
        method: 'post',
        url: 'https://test.52hbl.com/index.php/index/wxapp.login/get_phone_num',
        data: {
          phone
        }
      })
    },
    onSubmitNum () {
      const num = this.formLabelAlign.checkNum
      // console.log(phoneNum)
      // console.log(typeof phoneNum)
      this.$axios({
        method: 'post',
        url: 'https://test.52hbl.com/index.php/index/wxapp.login/check_phone_num',
        data: {
          num
        }
      }).then(this.getLoginSucc)
    },
    handleRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello
  display flex
  // flex-direction column
  justify-content center
  align-items center
  height 100vh
  .container
    height 400px
    width 500px
</style>
