// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// 🧠 Main schema when sending data back (GET)
export const detailsSchema = {
  $id: 'Details',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'name', 'email', 'gender', 'deleted'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    gender: { type: 'string', enum: ['male', 'female', 'other'] },
    deleted: { type: 'boolean', default: false },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' }
  }
}

export const detailsValidator = getValidator(detailsSchema, dataValidator)
export const detailsResolver = resolve({})

export const detailsExternalResolver = resolve({})

// 🆕 When creating (POST)
export const detailsDataSchema = {
  $id: 'DetailsData',
  type: 'object',
  additionalProperties: false,
  required: ['name', 'email', 'gender'],
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    gender: { type: 'string', enum: ['male', 'female', 'other'] },
    deleted: { type: 'boolean', default: false }
  }
}

export const detailsDataValidator = getValidator(detailsDataSchema, dataValidator)
export const detailsDataResolver = resolve({})

// ✏️ When updating (PATCH)
export const detailsPatchSchema = {
  $id: 'DetailsPatch',
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    gender: { type: 'string', enum: ['male', 'female', 'other'] },
    deleted: { type: 'boolean' }
  }
}

export const detailsPatchValidator = getValidator(detailsPatchSchema, dataValidator)
export const detailsPatchResolver = resolve({})

// 🔍 For query filtering (GET with params)
export const detailsQuerySchema = {
  $id: 'DetailsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax({
      name: { type: 'string' },
      email: { type: 'string' },
      gender: { type: 'string' },
      deleted: { type: 'boolean' }
    })
  }
}

export const detailsQueryValidator = getValidator(detailsQuerySchema, queryValidator)
export const detailsQueryResolver = resolve({})
