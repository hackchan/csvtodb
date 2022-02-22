import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameEntidad } from './Entidad'
import { tableName as tableNameReporte } from './Reporte'
import { tableName as tableNameCircular } from './Circular'
export const tableName = 'ejecucionIngresos'

export const ejecucionIngresoSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  anio: {
    type: DataTypes.INTEGER,
    field: 'anio_reporte',
    allowNull: false
  },
  vigencia: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Actual', 'Reservas', 'CxP']]
    }
  },
  nit: {
    type: DataTypes.BIGINT,
    field: 'nit_entidad_reportante',
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    field: 'nombre_entidad_reportante',
    allowNull: false
  },

  codigoPresupuestal: {
    type: DataTypes.STRING,
    field: 'codigo_presupuestal',
    allowNull: false
  },

  macroCampo: {
    allowNull: false,
    field: 'macro_campo_nivel_agregado',
    type: DataTypes.STRING,
    validate: {
      isIn: [['A', 'DA']]
    }
  },
  nombreRubro: {
    type: DataTypes.STRING,
    field: 'nombre_rubro',
    allowNull: false
  },

  presupuestoInicial: {
    type: DataTypes.DECIMAL,
    field: 'presupuesto_inicial',
    allowNull: false
  },
  adicionPeriodo: {
    type: DataTypes.DECIMAL,
    field: 'adiciones_del_periodo',
    allowNull: false
  },
  adicionAcumulada: {
    type: DataTypes.DECIMAL,
    field: 'adiciones_acumuladas',
    allowNull: false
  },
  reducionPeriodo: {
    type: DataTypes.DECIMAL,
    field: 'reducciones_del_periodo',
    allowNull: false
  },
  reducionAcumulada: {
    type: DataTypes.DECIMAL,
    field: 'reducciones_acumuladas',
    allowNull: false
  },
  apropiacionDefinitiva: {
    type: DataTypes.DECIMAL,
    field: 'apropiacion_definitiva',
    allowNull: false
  },
  reconocimientoPeriodo: {
    type: DataTypes.DECIMAL,
    field: 'reconocimientos_del_periodo',
    allowNull: false
  },
  reconocimientoAcumulado: {
    type: DataTypes.DECIMAL,
    field: 'reconocimientos_acumulados',
    allowNull: false
  },
  recaudosPeriodo: {
    type: DataTypes.DECIMAL,
    field: 'recaudos_del_periodo',
    allowNull: false
  },
  recaudoAcumulado: {
    type: DataTypes.DECIMAL,
    field: 'recaudos_acumulados',
    allowNull: false
  },

  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_reporte'
  },
  freg: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  },

  fupdate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW
  },

  entidadId: {
    field: 'entidad_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameEntidad,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  reportId: {
    field: 'reporte_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameReporte,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  circularId: {
    field: 'circular_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: tableNameCircular,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class EjecucionIngreso extends Model {
  static associate(models) {
    this.belongsTo(models.Entidad, {
      as: 'entidad'
    })

    this.belongsTo(models.Reporte, {
      as: 'reporte'
    }),
      this.belongsTo(models.Circular, {
        as: 'circular'
      })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'EjecucionIngreso',
      tableName,
      timestamps: true
    }
  }
}
