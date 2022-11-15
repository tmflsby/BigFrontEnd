<template>
  <div>
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <ValidationProvider name="用户名" rules="required|email" v-slot="{errors}">
            <div class="layui-input-inline">
              <input
                type="text"
                name="name"
                placeholder="请输入用户名"
                autocomplete="off"
                class="layui-input"
                v-model.trim="name"
              >
            </div>
            <span class="error layui-form-mid">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
              v-model="password"
            >
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="captcha"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
              v-model="captcha"
            >
          </div>
          <div
            class="layui-form-mid layui-word-aux captcha-svg"
            v-html="captchaSVG"
            @click="getCaptcha"
          />
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登录</button>
        <a class="forgot-password" @click="forgetPassword">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getCode, forget } from '@/api/login'
import { ValidationProvider, extend } from 'vee-validate'
// import { required, email } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: zh.messages[rule] // assign message
  })
}
export default {
  name: 'Login',
  components: {
    ValidationProvider
  },
  data () {
    return {
      name: '',
      password: '',
      captcha: '',
      captchaSVG: '',
      errorMessage: []
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha () {
      const getCaptchaRes = await getCode()
      console.log(getCaptchaRes)
      if (getCaptchaRes.code === 200) {
        this.captchaSVG = getCaptchaRes.data
      }
    },
    checkForm () {
      this.errorMessage = []
      if (!this.name) {
        this.errorMessage.push('用户名不能为空')
      }
      if (!this.password) {
        this.errorMessage.push('密码不能为空')
      }
      if (!this.captcha) {
        this.errorMessage.push('验证码不能为空')
      }
    },
    forgetPassword () {
      forget({
        username: this.name,
        code: this.captcha
      }).then(res => {
        if (res.code === 200) {
          alert('邮件发送成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
  padding: 20px;
}
input {
  width: 190px;
}
.forgot-password {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.captcha-svg {
  position: relative;
  top: -15px;
}
.error {
  color: #f00;
}
</style>
