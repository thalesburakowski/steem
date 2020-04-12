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
          allowNull: false
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { sequelize }
    )
  }
}

module.exports = User
