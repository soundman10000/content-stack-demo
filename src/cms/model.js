import Contentstack from 'contentstack'
import { Utils } from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import { pick, path, compose, reduce, assoc, keys } from 'ramda'

export const toClient = Contentstack.Stack
export const enableLivePreview = ContentstackLivePreview.init

export const developmentConfig = {
  api_key: 'blt16b8a435e6f90caa',
  delivery_token: 'csdb6a16940f5a9fb667945ecd',
  environment: 'development',
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com", 
    preview_token: "cs08b2313d23612772dc185b06"
  },
}

export const developmentLivePreview = {
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

export const log = label => d => {
  console.log(d, label)
  return d
}

export const pullTags = fields => 
  compose(extractCslp, pick(fields), path(['$']))

const extractCslp = (data) => 
  reduce((res, k) => 
      assoc(k, data[k]['data-cslp'], res), 
      {}, keys(data));

export const toModel = fields => c => 
  c ? ({
      content: pick(fields)(c),
      $: pullTags(fields)(c)
    })
    : ({})

export const addTags = typeId => c => {
  Utils.addEditableTags(c, typeId, true, 'en-us')
  return c
}

export const addConditions = query => conditions => 
  conditions.reduce((acc, cond, i, conditions) => 
    i < conditions.length - 1
      ? acc.where(cond.key, cond.value.toLowerCase()).and()
      : acc.where(cond.key, cond.value.toLowerCase()) 
  , query);