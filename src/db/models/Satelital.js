import { Model, DataTypes } from 'sequelize'
export const tableName = 'satelitales'

export const SatelitalSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

export class Satelital extends Model {
  static associate(models) {
    this.hasMany(models.Department, { foreignKey: 'satelitalId', as: 'departmets' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Satelital',
      tableName,
      timestamps: false
    }
  }
}
