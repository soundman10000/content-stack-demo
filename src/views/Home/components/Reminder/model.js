import { path, pick, compose } from 'ramda'

export const toModel = compose(pick(['$', 'call_to_action', 'information']), path(['content'])) 