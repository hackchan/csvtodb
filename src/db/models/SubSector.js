import { DataTypes, Model } from 'sequelize'

export const tableName = 'subsectores'
import { tableName as tableNameSector } from './Sector'
export const subsectorSchema = {
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
  sectorId: {
    field: 'sector_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameSector,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class SubSector extends Model {
  static associate(models) {
    this.belongsTo(models.Sector, {
      as: 'sector'
    })
    this.hasMany(models.Entidad, {
      foreignKey: 'subsectorId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'SubSector',
      tableName,
      timestamps: false
    }
  }
}
