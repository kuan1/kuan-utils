process.env.NODE_ENV = 'production'
process.env.EXTRACT_CSS = '0'
process.env.DISCARD_HTML = '0'
process.env.DISABLE_CLEAN = '0'

const rimraf = require('rimraf')
const chalk = require('chalk')
const { buildLib } = require('kuan-pack')
const { resolve, fileDisplay } = require('./utils')

// 将build包装成Promise
const build = options => new Promise(resolve => buildLib(options, resolve))

// 编译所有src文件
buildAll()
async function buildAll() {
  console.log(chalk.red.bold('清空目录...'))
  rimraf.sync(resolve('lib'))

  const targets = fileDisplay(resolve('src'))
  for (let i = 0; i < targets.length; i++) {
    const libName = targets[i].substr(1)
    if (libName[0] === '.') continue
    console.log(chalk.red(`${libName}编译开始...`))
    const options = {
      entry: resolve(`src/${libName}`),
      libName:
        libName === 'index.js' ? 'kuan-utils' : libName.replace('.js', ''),
      distPath: resolve('lib'),
      disabledClean: true, // 是否自动清空dist
      htmlTemplate: false,
      extractCss: false
    }
    await build(options)
  }
  console.log(chalk.red.bold(`${targets.length}个文件已编译！`))
}
