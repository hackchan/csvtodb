const Joi = require('joi')

const id = Joi.number().integer()
const username = Joi.string().min(3).max(25)
const password = Joi.string()
const role = Joi.string()

export const createAuthSchema = Joi.object({
  username: username.required(),
  password: password.required(),
  role: role.required()
})

export const updateAuthSchema = Joi.object({
  username: username,
  password: password,
  role: role
})

export const getAuthSchema = Joi.object({
  id: id.required()
})
