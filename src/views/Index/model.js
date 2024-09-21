import { propOr } from 'ramda'

export const getContent = csClient => 
  csClient
  .ContentType('index')
  .Entry('blt05b254af46ef63c2')
  .toJSON()
  .fetch()

export const toViewModel = state => content => {
  state.welcomeBanner = propOr('This is a place holder!', 'welcome_banner')(content)
}
