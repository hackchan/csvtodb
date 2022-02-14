const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(25)
const lastName = Joi.string().min(3).max(25)
//const avatar = Joi.string().uri()
//const image = Joi.string().uri()
const phone = Joi.string().min(10).max(15)
const email = Joi.string().email()
const createdAt = Joi.date()
const username = Joi.string().min(3).max(25)
const password = Joi.string()
const role = Joi.string()
const authId = Joi.number().integer()

export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  email: email.required(),
  createdAt: createdAt.required(),
  auth: Joi.object({
    username: username.required(),
    password: password.required(),
    role: role.required()
  })
})

export const updateUserSchema = Joi.object({
  name,
  lastName,
  phone,
  email,
  createdAt,
  authId
})

export const getUserSchema = Joi.object({
  id: id.required()
})
