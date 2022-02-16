import { DataTypes, Model } from 'sequelize'

export const tableName = 'tipoentidades'

export const tipoEntidadSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  }
}

export class TipoEntidad extends Model {
  static associate(models) {
    this.hasMany(models.Entidad, { foreignKey: 'tipoEntidad', as: 'entidad' })
  }
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Tipoentidad',
      tableName,
      timestamps: false
    }
  }
}
