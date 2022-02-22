import { DataTypes, Model } from 'sequelize'
import {
  tableName as tableNameAuth,
  authSchema
} from './Auth'
export const tableName = 'users'

export const userSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataTypes.BIGINT
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  lastName: {
    field: 'last_name',
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
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE
  },

  authId: {
    field: 'auth_id',
    allowNull: false,
    unique: true,
    type: DataTypes.BIGINT,
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
    this.belongsTo(models.Auth, {
      as: 'auth'
    })
    //this.hasOne(models.Department, { foreignKey: 'userId' })
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
