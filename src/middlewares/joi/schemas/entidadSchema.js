const Joi = require('joi')

const id = Joi.number().integer()
const nombre = Joi.string().min(3)
const db = Joi.string()
const tipoEntidad = Joi.number().integer()
const departId = Joi.number().integer()
const userId = Joi.number().integer()



export const createEntidadSchema = Joi.object({
  nombre: nombre.required(),
  db: db.required(),
  tipoEntidad: tipoEntidad.required(),
  departId: departId.required(),
  userId: userId.required()
})

export const updateEntidadSchema = Joi.object({
  nombre,
  db,
  tipoEntidad,
  departId,
  userId
})

export const getEntidadSchema = Joi.object({
  id: id.required()
})
