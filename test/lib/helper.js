import fs from 'fs'

function deleteFolderRecursive (dir) {
  var files = []
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir)
    files.forEach(function (file, index) {
      var curPath = dir + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dir)
  }
}

export {
  deleteFolderRecursive
}
