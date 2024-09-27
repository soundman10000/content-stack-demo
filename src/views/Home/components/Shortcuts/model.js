import { props, compose, map, flatten,sortBy, prop } from 'ramda'

export const include = [
  'benefits_history',
  'financial_wellness',
  'health_and_wellness_tile',
  'life_experiences_tile',
  'update_benefits_tile',
  'your_benefits_tile'
]

export const fields = [
  'shortcuts_banner',
  'benefits_history',
  'financial_wellness',
  'health_and_wellness_tile',
  'life_experiences_tile',
  'update_benefits_tile',
  'your_benefits_tile'
]

const toTileModel = d => ({
  title: d.shortcut_title,
  titleTag: d.$.shortcut_title['data-cslp'],
  order: d.order,
  orderTag: d.$.order['data-cslp'],
  icon: d.shortcut_icon.url,
  iconTag: d.$.shortcut_icon['data-cslp']
})

export const toTilesViewModel = compose(
  sortBy(prop('order')), 
  map(toTileModel), 
  flatten, 
  props(include)) 

