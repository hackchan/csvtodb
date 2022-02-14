const Joi = require('joi')

const fieldname = Joi.string().required()

export const uploadschema = Joi.object({
  fieldname
})
