const mongoose = require('mongoose')


// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const User = mongoose.model('users', new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
}))

const shuaiyang = new User({
  name: '帅洋',
  age: 18,
  email: 'shuaiyang@gmail.com'
})

shuaiyang.save().then(() => {
  console.log('保存成功')
})