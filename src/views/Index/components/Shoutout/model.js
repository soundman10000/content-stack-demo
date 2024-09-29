import { compose, pick, reduce, toPairs, assoc } from 'ramda'

const toModel = (acc, prop) => assoc(prop[0], prop[1].hex)(acc)

export const toColorModel = fields => 
  compose(
    reduce(toModel, {}), 
    toPairs, 
    pick(fields))