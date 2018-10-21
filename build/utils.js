var fs = require('fs')
var path = require('path')

/**
 * 获取根目录
 * @param {String} filePath
 */
const resolve = filePath => path.resolve(__dirname, '..', filePath)

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
  const collectFiles = []

  const firstPath = filePath
  //根据文件路径读取文件，返回文件列表\
  const files = fs.readdirSync(filePath)
  files.forEach(filename => {
    //获取当前文件的绝对路径
    const filedir = path.join(filePath, filename)
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir)
    var isFile = stats.isFile() //是文件
    var isDir = stats.isDirectory() //是文件夹
    if (isDir) {
      fileDisplay(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    } else if (isFile) {
      collectFiles.push(filedir.replace(firstPath, '').replace(/\\/, ''))
    }
  })

  // 最后的文件
  return collectFiles
}

module.exports = {
  resolve,
  fileDisplay
}
