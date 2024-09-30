import { path, pick, compose, any } from 'ramda'

export const toModel = 
  compose(pick(['$', 'call_to_action', 'taxonomies', 'information']), path(['content'])) 

const showNotEnrolled = any(z => z.term_uid === 'not_enrolled');
const inMedical = any(z => z === 'MEDICAL');
const showMedical = any(z => z.term_uid === 'medical_e');

export const showInfo = userBenefits => tax => {
  if (!tax || tax.length === 0) {
    return true;
  }

  const userEnrolled = userBenefits.length > 0;

  if (showNotEnrolled(tax)) {
    return !userEnrolled;
  }

  if (inMedical(userBenefits) && showMedical(tax)) {
    return true;
  }

  return false;
}