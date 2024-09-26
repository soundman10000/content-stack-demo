import { toClient, enableLivePreview, developmentConfig, developmentLivePreview, log, addTags, toModel } from './model'

class ContentStackClient {
  constructor() {
    this.initializeDevelopment()
  }

  initializeDevelopment() {
    this.client = toClient(developmentConfig)
    enableLivePreview(developmentLivePreview)
  }

  getEntry(contentType, entryId, fields) {
    return this.client
      .ContentType(contentType)
      .Entry(entryId)
      .toJSON()
      .fetch()
      .then(log(`Get Entry ${entryId}`))
      .then(addTags(contentType))
      .then(toModel(fields))
  }
}

const createContentStackClient = () => new ContentStackClient()

export { createContentStackClient }