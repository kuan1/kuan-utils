import fileUploader from '../src/uploader'

async function test() {
  const res = await fileUploader.getFile()
  console.log(res)
}

window.test = test
