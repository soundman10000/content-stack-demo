import { propOr, compose, objOf, path } from 'ramda'
import { Utils } from 'contentstack'

export const getContent = csClient => 
  csClient
  .ContentType('benefitsgo_login')
  .Entry('bltf864720003c6a939')
  .toJSON()
  .fetch()
  .then(addTags('benefitsgo_login'))
  .then(console.log)

export const toViewModel = state => data => content => {
  data.content = content
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

export const clients = [{
  name: 'McDonalds',
  id: 'mcd'
},
{
  name: 'Burger King',
  id: 'bk'
}]