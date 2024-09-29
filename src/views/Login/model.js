import { find, propEq } from 'ramda'

export const users = [
  {
    name: 'Jason Malley',
    companyId: 'McDonalds',
    email: 'jmalley@mcdonalds.com',
    job: 'Cook',
    eligible: true,
    enrolled: ['MEDIDCAL', 'DENTAL', 'VISION']
  },
  {
    name: 'Carlos GoBoncan',
    companyId: 'BurgerKing',
    email: 'cgoboncan@burgerking.com',
    job: 'Cook',
    eligible: false,
    enrolled: []
  },
  {
    name: 'Sandhya Gopalakrishnan',
    companyId: 'McDonalds',
    email: 'sgopalakrishnan@mcdonalds.com',
    job: 'Manager',
    eligible: true,
    enrolled: ['DENTAL']
  },
  {
    name: 'Lisbeth Ruiz',
    companyId: 'BurgerKing',
    email: 'lruiz@burgerking.com',
    job: 'Manager',
    eligible: false,
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
