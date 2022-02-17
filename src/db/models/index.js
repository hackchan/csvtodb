import {
  TipoEntidad,
  tipoEntidadSchema
} from './TipoEntidad'
import { Entidad, entidadSchema } from './Entidad'
import { User, userSchema } from './User'
import { Auth, authSchema } from './Auth'
import { Satelital, SatelitalSchema } from './Satelital'
import { Department, DepartmentSchema } from './Deparments'

function setupModel(sequelize) {
  Auth.init(authSchema, Auth.config(sequelize))
  User.init(userSchema, User.config(sequelize))
  Satelital.init(
    SatelitalSchema,
    Satelital.config(sequelize)
  )
  Department.init(
    DepartmentSchema,
    Department.config(sequelize)
  )
  TipoEntidad.init(
    tipoEntidadSchema,
    TipoEntidad.config(sequelize)
  )
  Entidad.init(entidadSchema, Entidad.config(sequelize))

  Auth.associate(sequelize.models)
  User.associate(sequelize.models)
  Satelital.associate(sequelize.models)
  Department.associate(sequelize.models)
  TipoEntidad.associate(sequelize.models)
  Entidad.associate(sequelize.models)
}

export default setupModel
