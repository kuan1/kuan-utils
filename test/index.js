console.log('测试开始...')
import { xlsx } from '../src'

xlsx.JSONToExcel({
  name: '测试',
  data: [{ a: 1, b: 2 }, { a: 2, b: 3 }],
  header: { a: '哈哈', b: '吼吼' }
})
