<template>
  <div class="hello">
    <el-form :label-position="labelPosition"
             label-width="80px"
             :model="ruleForm"
             :rules="rules"
             ref="ruleForm">
      <el-form-item label="用户名："
                    prop="name">
        <el-input v-model="ruleForm.name"
                  prop="ruleForm.name"
                  placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="pass">
        <el-input type="password"
                  prop="ruleForm.pass"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="checkPass">
        <el-input type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱"
                    prop="email">
        <el-input v-model="ruleForm.email"
                  placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model.number="ruleForm.phoneNum"
                  placeholder="请输入手机号码">
        </el-input>
        <el-input v-model.number="ruleForm.checkNum"
                  placeholder="请输入手机验证码">
        </el-input>
        <el-button type="primary"
                   @click="handleCheckNum">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleRegister"
                   type="primary">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'Regis',
  data () {
    return {
      labelPosition: 'right',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: '',
        checkNum: '',
        phoneNum: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符' }
        ],
        pass: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 5, max: 30, message: '密码不能小于5个字符或大于30个字符' }
        ],
        checkPass: [
          { required: true, message: '两次密码不一致', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    handleRegister () {
      const username = this.ruleForm.name
      const password = this.ruleForm.pass
      const email = this.ruleForm.email
      const phoneCode = this.ruleForm.checkNum
      this.$axios({
        method: 'post',
        url: 'https://test.52hbl.com/index.php/index/wxapp.login/phone_reg',
        data: {
          username,
          password,
          email,
          phone_code: phoneCode
        }
      }).then(this.getRegisterSucc)
    },
    getRegisterSucc (res) {
      console.log(res)
      res = res.data
      if (res && res.code === 0) {

        // this.$router('/index')
      }
    },
    handleCheckNum () {
      const phone = this.ruleForm.phoneNum
      // console.log(phoneNum)
      // console.log(typeof phoneNum)
      this.$axios({
        method: 'post',
        url: 'https://test.52hbl.com/index.php/index/wxapp.login/get_phone_num',
        data: {
          phone
        }
      }).then(this.getPhoneNumSucc)
    },
    getPhoneNumSucc (res) {
      console.log(res)
    },
    // 重置表单数据为空
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
