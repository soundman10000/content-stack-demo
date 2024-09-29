import { head, compose, map, path, pluck } from 'ramda'

export const include = [
  'reminders'
]

export const fields = [
  'heading',
  'reminders'
]

const getData = compose(head, path(['reminder', 'reminder'])) 
export const toReminderModel = compose(pluck('uid'), map(getData))