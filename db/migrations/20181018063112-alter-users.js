'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    let migrations = []
    migrations.push(queryInterface.changeColumn('users', 'first_name', {
      allowNull: false,
      defaultValue: 'n',
      comment: 'comment', // not support
      type: Sequelize.STRING(50)
    }))
    return Promise.all(migrations)
  },
  down: (queryInterface, Sequelize) => {
    let migrations = []
    migrations.push(queryInterface.changeColumn('users', 'first_name', {
      type: Sequelize.STRING
    }))
    return Promise.all(migrations)
  }
}
