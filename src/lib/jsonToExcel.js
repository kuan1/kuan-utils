import XLSX from 'xlsx'

/**
 * json导出excel
 * @param name：文件名字，string
 * @param data： 内容： array
 * @param header： 标题： Object{key: 对应名字}
 * @param skipHeader: 是否隐藏头部
 */
export default ({ name = 'excel', data = [], header = {}, skipHeader = true }) => {
  const cloneData = [...data]
  cloneData.unshift(header)
  const ws = XLSX.utils.json_to_sheet(
    cloneData,
    {
      header: Object.keys(header),
      skipHeader
    }
  )
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
  /* generate file and send to client */
  XLSX.writeFile(wb, `${name}.xlsx`)
}
