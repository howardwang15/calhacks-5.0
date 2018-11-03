import { Subjects } from '../actions/tutor_form_actions'
import { ADD_SUBJECT, ADD_COURSE, ADD_CLASSNAME, ADD_OFFICEHOURS, ADD_RATE } from '../actions/tutor_form_actions'

const initialState = {
  subjects: [],
  courses: [],
  classNames: [],
  officeHours: [],
  rate: 10
}

export default (state = { initialState }, action) => {
  switch(action.type) {
    case ADD_SUBJECT:
    case ADD_COURSE:
      return Object.assign({}, state, {
        courses: [
          ...state.courses, {
            course: action.course
          }
        ]
      })
    case ADD_CLASSNAME:
      return Object.assign({}, state, {
        classNames: [
          ...state.classNames, {
            className: action.className
          }
        ]
      })
    case ADD_OFFICEHOURS:
      return Object.assign({}, state, {
        officeHours: action.officeHours
      })
    case ADD_RATE:
      return Object.assign({}, state, {
        rate: action.rate
      })
    default:
      return state
  }
};
