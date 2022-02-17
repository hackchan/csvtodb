import { Auth, authSchema } from './Auth'
import { User, userSchema } from './User'
// import { Satelital, SatelitalSchema } from './Satelital'
// import { Department, DepartmentSchema } from './Deparments'
// import {
//   TipoEntidad,
//   tipoEntidadSchema
// } from './TipoEntidad'
// import { Entidad, entidadSchema } from './Entidad'
/**Aqui vamos a inicializar todos los modelos */

function setupModel(sequelize) {
  User.init(userSchema, User.config(sequelize))
  Auth.init(authSchema, Auth.config(sequelize))
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
  // Entidad.init(entidadSchema, Entidad.config(sequelize))

  User.associate(sequelize.models)
  Auth.associate(sequelize.models)
  // Satelital.associate(sequelize.models)
  // Department.associate(sequelize.models)
  // TipoEntidad.associate(sequelize.models)
  // Entidad.associate(sequelize.models)
}

export default setupModel
