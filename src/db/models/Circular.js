import { DataTypes, Model } from 'sequelize'

export const tableName = 'circular'

export const circularSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_circular',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  numero: {
    allowNull: false,
    type: DataTypes.STRING
  },

  descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Circular extends Model {
  // static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'circular',
      tableName,
      timestamps: false
    }
  }
}
