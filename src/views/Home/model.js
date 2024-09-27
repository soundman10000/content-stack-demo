import { split, head, compose } from 'ramda'

export const pullFirstName = compose(head, split(' '))