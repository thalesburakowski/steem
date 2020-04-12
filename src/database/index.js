const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const dbConfig = require('../config/database')
const connection = new Sequelize(dbConfig)

initAllModels()

module.exports = connection

function initAllModels () {
  const normalizedPath = require('path').resolve('src', 'app', 'models')
  const folders = fs.readdirSync(normalizedPath)
  folders.forEach((folder) => {
    const actualPath = path.join(normalizedPath, folder)
    const modelPath = fs
      .readdirSync(actualPath)
      .filter((file) => file.includes('model'))
    modelPath.forEach((modelFile) => {
      const model = require(path.join(actualPath, modelFile))
      model.init(connection)
      if (model.associate) {
        model.associate(connection)
      }
      model.sync()
    })
  })
}
