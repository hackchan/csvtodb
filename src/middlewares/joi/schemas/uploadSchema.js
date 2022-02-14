const Joi = require('joi')

const file = Joi.any().required()

export const uploadschema = Joi.object({
  file
})
