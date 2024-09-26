import { find, propEq } from 'ramda'

export const users = [
  {
    name: 'Jason Malley',
    companyId: 'McDonalds',
    email: 'jmalley@mcdonalds.com',
    job: 'Cook'
  },
  {
    name: 'Dan DaMan',
    companyId: 'BurgerKing',
    email: 'ddman@burgerking.com',
    job: 'Manager'
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
