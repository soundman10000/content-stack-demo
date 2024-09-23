import { propOr, compose, objOf, path } from 'ramda'
import { Utils } from 'contentstack'

export const getContent = csClient => 
  csClient
  .ContentType('index')
  .Entry('blt05b254af46ef63c2')
  .toJSON()
  .fetch()
  .then(addTags('index'))
  .then(toContentModel('welcome_banner'))

export const toViewModel = state => content => {
  state.content = content
  state.loaded = true
}

const addTags = typeId => c => {
  Utils.addEditableTags(c, typeId, true, 'en-us')
  return c
}

const toContentObject = name => content => ({ 
  text: propOr('This is a place holder!', name)(content),
  tag: path(['$', name, 'data-cslp'])(content),
})

const toContentModel = name => compose(objOf(name), toContentObject(name)) 
