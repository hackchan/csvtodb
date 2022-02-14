const Joi = require('joi')

const id = Joi.number().integer()
const nombre = Joi.string().min(3)

export const createTipoEntidadSchema = Joi.object({
  nombre: nombre.required()
})

export const updateTipoEntidadSchema = Joi.object({
  nombre
})

export const getTipoEntidadSchema = Joi.object({
  id: id.required()
})
