import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
import { tableName as tableNameDepartments } from './Deparments'
import { tableName as tableNameTipoEntidad } from './TipoEntidad'
export const tableName = 'entidades'

export const entidadSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  db: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  tipoEntidad: {
    field: 'tipo_entidad_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameTipoEntidad,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  departId: { 
    field: 'depart_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: tableNameDepartments,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  authId: {
    field: 'auth_id',
    allowNull: false,
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
    this.belongsTo(models.Tipoentidad, { as: 'tipoentidad' })
    this.belongsTo(models.Department, { as: 'department' })
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
