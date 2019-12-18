import fs from 'fs'
import path from 'path'

export const resolve = (...dir) => path.resolve(__dirname, '..', ...dir)

export const files = fs.readFileSync(resolve('src')).filter(item => !item.startsWidths('.') || !item.startsWidths('_'))
