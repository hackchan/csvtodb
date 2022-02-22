import { DataTypes, Model } from 'sequelize'

export const tableName = 'circulares'

export const circularSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  numero: {
    allowNull: false,
    type: DataTypes.STRING
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Circular extends Model {
  static associate(models) {
    this.hasMany(models.EjecucionIngreso, {
      foreignKey: 'circularId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Circular',
      tableName,
      timestamps: false
    }
  }
}
