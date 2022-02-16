import { DataTypes, Model } from 'sequelize'
export const tableName = 'departments'
import { tableName as tableNameSatelital } from './Satelital'
import { tableName as tableNameUser } from './User'
export const DepartmentSchema = {
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

  latitude: {
    allowNull: true,
    type: DataTypes.REAL
  },

  longitude: {
    allowNull: true,
    type: DataTypes.REAL
  },
  active: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  satelitalId: {
    field: 'satelital_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameSatelital,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    unique: false,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameUser,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Department extends Model {
  static associate(models) {
    this.belongsTo(models.Satelital, { as: 'satelital' })
    this.belongsTo(models.User, { as: 'user' })
    this.hasMany(models.Entidad, { foreignKey: 'departId' })
  }
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Department',
      tableName,
      timestamps: false
    }
  }
  //   static setup(sequelize) {
  //     Department.init(DepartmentSchema, {
  //       sequelize,
  //       modelName: 'departamentos',
  //       tableName,
  //       timestamps: false
  //     })
  //   }
}
