import {qs} from '../../src/index'

console.log('%c 测试qs：', 'color: red; font-weight: bold')

console.log(qs.stringify({a: 1, b: 2}))
console.log(qs.parse('a=1&b=2'))

