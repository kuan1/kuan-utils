import XLSX from 'xlsx'

/**
 * json导出excel
 * @param name：文件名字，string
 * @param data： 内容： array
 * @param header： 标题： Object{key: 对应名字}
 * @param skipHeader: 是否隐藏头部
 */
export const JSONToExcel = ({
  name = 'excel',
  data = [],
  header = {},
  skipHeader = true
}) => {
  const cloneData = [...data]
  cloneData.unshift(header)
  const ws = XLSX.utils.json_to_sheet(cloneData, {
    header: Object.keys(header),
    skipHeader
  })
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
  /* generate file and send to client */
  XLSX.writeFile(wb, `${name}.xlsx`)
}

export const excelToJSON = file => {
  if (!file) return
  const suffix = file.name.split('.')[1]
  if (suffix !== 'xls' && suffix !== 'xlsx') {
    alert('导入的文件格式不正确!')
    return
  }

  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = function(e) {
      const wb = XLSX.read(e.target.result, {
        type: 'binary'
      })
      resolve(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]))
    }
    reader.readAsBinaryString(file)
  })
}

export default {
  JSONToExcel,
  excelToJSON
}
