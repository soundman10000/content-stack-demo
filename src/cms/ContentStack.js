import { 
  toClient,
  enableLivePreview,
  developmentConfig,
  developmentLivePreview,
  log,
  addTags,
  toModel,
  addConditions
} from './model'
import { head, compose, flatten } from 'ramda'

const pickFirst = compose(head, flatten);

class ContentStackClient {
  constructor() {
    this.initializeDevelopment()
  }

  initializeDevelopment() {
    this.client = toClient(developmentConfig)
    enableLivePreview(developmentLivePreview)
  }

  getContentOnCondition(contentType, conditions, reference, fields){
    let query = addConditions(this.client.ContentType(contentType).Query())(conditions)
      .toJSON();

    if (reference){
      query = query.includeReference(reference) 
    }
    
    return query
      .find()
      .then(pickFirst)
      .then(log(`Get on conditions ${contentType}`))
      .then(addTags(contentType))
      .then(toModel(fields));
  }

  getTaxonomy(contentType, taxonomyId, termId, level, fields) {
    return this.client
      .ContentType(contentType)
      .Query()
      .limit(1)
      .equalAndBelow(`taxonomies.${taxonomyId}`, termId.toLowerCase(), level ?? 10)
      .toJSON()
      .find()
      .then(pickFirst)
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