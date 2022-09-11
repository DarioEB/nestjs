import * as joi from 'joi'

export const JoiValidationSchema = joi.object({
  MONGODB_URL: joi.required(),
  PORT: joi.number().default(3000),
  DEFAULT_LIMIT: joi.number().default(5),
})