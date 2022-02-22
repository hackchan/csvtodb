import {
  TipoEntidad,
  tipoEntidadSchema
} from './TipoEntidad'
import { SubSector, subsectorSchema } from './SubSector'
import { Sector, sectorSchema } from './Sector'
import { Entidad, entidadSchema } from './Entidad'
import { User, userSchema } from './User'
import { Auth, authSchema } from './Auth'
import { Satelital, SatelitalSchema } from './Satelital'
import { Department, DepartmentSchema } from './Deparments'
import { Reporte, reporteSchema } from './Reporte'
import { Circular, circularSchema } from './Circular'
import {
  EjecucionIngreso,
  ejecucionIngresoSchema
} from './EjecucionIngreso'

function setupModel(sequelize) {
  Auth.init(authSchema, Auth.config(sequelize))
  User.init(userSchema, User.config(sequelize))
  // Satelital.init(
  //   SatelitalSchema,
  //   Satelital.config(sequelize)
  // )
  // Department.init(
  //   DepartmentSchema,
  //   Department.config(sequelize)
  // )
  // TipoEntidad.init(
  //   tipoEntidadSchema,
  //   TipoEntidad.config(sequelize)
  // )

  // SubSector.init(
  //   subsectorSchema,
  //   SubSector.config(sequelize)
  // )
  // Sector.init(sectorSchema, Sector.config(sequelize))
  // Entidad.init(entidadSchema, Entidad.config(sequelize))

  // EjecucionIngreso.init(
  //   ejecucionIngresoSchema,
  //   EjecucionIngreso.config(sequelize)
  // )

  // Reporte.init(reporteSchema, Reporte.config(sequelize))
  // Circular.init(circularSchema, Circular.config(sequelize))
  User.associate(sequelize.models)
  Auth.associate(sequelize.models)

  // Satelital.associate(sequelize.models)
  // Department.associate(sequelize.models)
  // TipoEntidad.associate(sequelize.models)
  // Sector.associate(sequelize.models)
  // SubSector.associate(sequelize.models)
  // Entidad.associate(sequelize.models)
  // Reporte.associate(sequelize.models)
  // Circular.associate(sequelize.models)
  // EjecucionIngreso.associate(sequelize.models)
}

export default setupModel
