import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
export const tableName = 'users'

export const userSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },

  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },

  email: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },

  image: {
    allowNull: true,
    type: DataTypes.STRING
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },

  authId: {
    field: 'auth_id',
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameAuth,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class User extends Model {
  static associate(models) {
    this.belongsTo(models.Auth, { as: 'auth' })
    this.hasOne(models.Department, { foreignKey: 'userId' })
  }

  static config(sequelize) {
    return {
      freezeTableName: true,
      sequelize,
      modelName: 'User',
      tableName,
      timestamps: false
    }
  }
}
