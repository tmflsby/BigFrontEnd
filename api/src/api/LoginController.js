import moment from 'moment'
import send from '../config/MailConfig'
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

class LoginController {
  constructor() {

  }

  async forget(ctx) {
    const { body } = ctx.request
    try {
      let result = await send({
        user: 'tmflsby',
        type: 'reset',
        code: '123456',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        data: {
          username: '帅洋',
        },
        email: body.username,
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LoginController()