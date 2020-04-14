const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING,
          allowNull: true
        },
        state: {
          type: DataTypes.STRING,
          allowNull: true
        },
        city: {
          type: DataTypes.STRING,
          allowNull: true
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: true
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      { sequelize }
    )
  }
}

module.exports = User
