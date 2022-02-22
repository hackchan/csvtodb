import { DataTypes, Model } from 'sequelize'

export const tableName = 'sectores'

export const sectorSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  initials: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Sector extends Model {
  static associate(models) {
    this.hasMany(models.SubSector, {
      foreignKey: 'sectorId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Sector',
      tableName,
      timestamps: false
    }
  }
}
