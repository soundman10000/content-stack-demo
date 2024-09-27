import { find, propEq } from 'ramda'

export const users = [
  {
    name: 'Jason Malley',
    companyId: 'McDonalds',
    email: 'jmalley@mcdonalds.com',
    job: 'Cook',
    enrolled: ['MEDIDCAL', 'DENTAL', 'VISION']
  },
  {
    name: 'Carlos GoBoncan',
    companyId: 'BurgerKing',
    email: 'cgoboncan@burgerking.com',
    job: 'Cook',
    enrolled: ['DENTAL', 'VISION']
  },
  {
    name: 'Sandhya Gopalakrishnan',
    companyId: 'McDonalds',
    email: 'sgopalakrishnan@mcdonalds.com',
    job: 'Manager',
    enrolled: ['DENTAL']
  },
  {
    name: 'Lisbeth Ruiz',
    companyId: 'BurgerKing',
    email: 'lruiz@burgerking.com',
    job: 'Manager',
    enrolled: []
  }
]

export const fields = [
  'banner',
  'log_in_text',
  'no_account_text',
  'sign_up_text',
  'title',
  'user_id_text',
  'welcome_text'
]
 
export const validateUser = email => find(propEq(email, 'email'))(users);
