import { DataTypes, Model } from 'sequelize'

export const tableName = 'reportes'

export const reporteSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Reporte extends Model {
  static associate(models) {
    this.hasMany(models.EjecucionIngreso, {
      foreignKey: 'reportId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Reporte',
      tableName,
      timestamps: false
    }
  }
}
