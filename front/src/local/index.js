import { Validator } from 'vee-validate'

const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => '请输入' + field,
      email: () => '请输入正确的邮箱地址'
    },
    attributes: {
      name: '账号',
      password: '密码',
      email: '邮箱'
    }
  }
}

Validator.localize(dictionary)
