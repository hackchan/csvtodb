import { DataTypes, Model } from 'sequelize'

export const tableName = 'auths'

export const authSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },

  username: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING
  },

  role: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Auth extends Model {
  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'authId', as: 'user' })
    this.hasOne(models.Entidad, { foreignKey: 'authId', as: 'entidad' })
  }

  static config(sequelize) {
    return {
      freezeTableName: true,
      sequelize,
      modelName: 'Auth',
      tableName,
      timestamps: false
    }
  }
}
