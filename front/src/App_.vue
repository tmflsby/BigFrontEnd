<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div :class="['layui-form-item', {
          'form-group--error': $v.name.$error,
        }]">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="name"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              v-model.trim="name"
              @input="setName($event.target.value)"
            >
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">用户名输入格式错误</div>
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
        <a class="forgot-password" href="https://layui.github.io/">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'App',
  data () {
    return {
      name: '',
      password: '',
      captcha: '',
      captchaSVG: '',
      errorMessage: []
    }
  },
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    captcha: {
      required
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha () {
      const getCaptchaRes = await axios.get('http://localhost:3000/getCaptcha')
      console.log(getCaptchaRes)
      if (getCaptchaRes.status === 200 && getCaptchaRes.data.code === 200) {
        this.captchaSVG = getCaptchaRes.data.data
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
    setName (value) {
      this.name = value
      this.$v.name.$touch()
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
  display: none;
}
.form-group--error {
  .error {
    display: block;
  }
}
</style>
