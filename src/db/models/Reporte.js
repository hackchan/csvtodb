import { DataTypes, Model } from 'sequelize'

export const tableName = 'reportes'

export const reporteSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'reporte_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Reporte extends Model {
  // static associate(models) {

  // }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'reportes',
      tableName,
      timestamps: false
    }
  }
}
