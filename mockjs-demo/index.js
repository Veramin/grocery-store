// Way: 
var Mock = require('mockjs')
var template = {
  // array为一个随机数组， 长度在8-10之间
  'array|8-10': [
    {
      // 指明id属性， 从6开始，自增1
      'id|+1': 6,
      name: Mock.Random.cname(), // 随机产生一个中文的姓名
      addr: Mock.mock('@county(true)'), // 随机生成一个地址
      'age|18-60': 1, // 随机生成一个数字 大小在18到60
      birth: Mock.Random.date(), // 随机生成一个日期
      email: '@EMAIL',
      mobile: /^(18|16)[0-9]{10}$/, // 用正则匹配1开头的11位数字的手机号
      date: Mock.Random.date('yyyy-MM-dd'),
      time :Mock.Random.time()

    }
  ],
  'aboutRandom|1-3': [
    {
      // 是否是学生
      'isStudent': Mock.Random.boolean(),
      

    }
  ]
}
var data = Mock.mock(template)

console.log(JSON.stringify(data, null, 4))
