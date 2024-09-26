import { toClient, enableLivePreview, developmentConfig, developmentLivePreview, log, addTags, toModel } from './model'
import { head, compose, flatten } from 'ramda'

const pickFirstTaxonomy = compose(head, flatten);

class ContentStackClient {
  constructor() {
    this.initializeDevelopment()
  }

  initializeDevelopment() {
    this.client = toClient(developmentConfig)
    enableLivePreview(developmentLivePreview)
  }

  getTaxonomy(contentType, taxonomyId, termId, level, fields) {
    return this.client
      .ContentType(contentType)
      .Query()
      .limit(1)
      .equalAndBelow(`taxonomies.${taxonomyId}`, termId.toLowerCase(), level ?? 10)
      .toJSON()
      .find()
      .then(pickFirstTaxonomy)
      .then(log(`Get taxonomies ${taxonomyId} ${termId}`))
      .then(addTags(contentType))
      .then(toModel(fields))
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