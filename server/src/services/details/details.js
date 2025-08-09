// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  detailsDataValidator,
  detailsPatchValidator,
  detailsQueryValidator,
  detailsResolver,
  detailsExternalResolver,
  detailsDataResolver,
  detailsPatchResolver,
  detailsQueryResolver
} from './details.schema.js'
import { DetailsService, getOptions } from './details.class.js'

export const detailsPath = '/details'
export const detailsMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './details.class.js'
export * from './details.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const details = app => {
  // Register our service on the Feathers application
  app.use(detailsPath, new DetailsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: detailsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(detailsPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(detailsExternalResolver), schemaHooks.resolveResult(detailsResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(detailsQueryValidator), schemaHooks.resolveQuery(detailsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(detailsDataValidator), schemaHooks.resolveData(detailsDataResolver)],
      patch: [schemaHooks.validateData(detailsPatchValidator), schemaHooks.resolveData(detailsPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
