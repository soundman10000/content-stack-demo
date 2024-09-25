import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import { pick } from 'ramda'
import { Utils } from 'contentstack'

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

const log = label => d => {
  console.log(d, label)
  return d
}

const toModel = fields => c => fields ? pick(fields)(c) : [] 

const addTags = typeId => c => {
  Utils.addEditableTags(c, typeId, true, 'en-us')
  return c
}

const toClient = Contentstack.Stack
const enableLivePreview = ContentstackLivePreview.init

const developmentConfig = {
  api_key: 'blt16b8a435e6f90caa',
  delivery_token: 'csdb6a16940f5a9fb667945ecd',
  environment: 'development',
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com", 
    preview_token: "cs08b2313d23612772dc185b06"
  },
}

const developmentLivePreview = {
  stackDetails: {
      apiKey: "blt16b8a435e6f90caa",
      environment: "development",
      branch: "main"
 },
  clientUrlParams: {
      protocol: "https",
      host: "app.contentstack.com",
      port: 443,
  },
}

const createContentStackClient = () => new ContentStackClient()

export { createContentStackClient }