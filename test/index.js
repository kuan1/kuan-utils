import Upload from '../src2/echarts/UploadExcel.js'
import echartsMap from '../src2/echarts/echartsMap.js'

const prepareData = (data) => {
  return data.map(({iyear, latitude, longitude}) => ({
    name: '',
    value: [longitude, latitude]
  }))
}

new Upload(function(data) {
  this.hide()
  const echartsData = prepareData(data)
  console.log(echartsData)
  echartsMap.init(echartsData)
})
