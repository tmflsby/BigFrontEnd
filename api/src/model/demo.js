import User from './test'

// 增加
const user = {
  name: '帅洋',
  age: 18,
  email: 'shuaiyang@qq.com'
}

const run = async () => {
  const data = new User(user)
  const result =  await data.save()
  console.log(result)
}

await run()

//