import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
import { tableName as tableNameDepartments } from './Deparments'
import { tableName as tableNameTipoEntidad } from './TipoEntidad'
import { tableName as tableNameSubSector } from './SubSector'
export const tableName = 'entidades'

export const entidadSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },

  nit: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },

  name: {
    allowNull: false,
    unique: false,
    type: DataTypes.STRING
  },

  db: {
    allowNull: false,
    unique: false,
    type: DataTypes.STRING
  },

  capital: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  divipola: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },

  tipoEntidad: {
    field: 'tipo_entidad_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameTipoEntidad,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  subsectorId: {
    field: 'subsector_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameSubSector,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  departId: {
    field: 'depart_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameDepartments,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  authId: {
    field: 'auth_id',
    allowNull: true,
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

export class Entidad extends Model {
  static associate(models) {
    this.belongsTo(models.Auth, { as: 'auth' })
    this.belongsTo(models.Tipoentidad, {
      as: 'tipoentidad'
    })
    this.belongsTo(models.Department, { as: 'department' })
    this.belongsTo(models.SubSector, {
      as: 'subsector'
    })
    this.hasMany(models.EjecucionIngreso, {
      foreignKey: 'entidadId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Entidad',
      tableName,
      timestamps: false
    }
  }
}
