/*
 * action types
 */

export const ADD_SUBJECT = 'ADD_SUBJECT'
export const ADD_COURSE = 'ADD_COURSE'
export const ADD_CLASSNAME = 'ADD_CLASSNAME'
export const ADD_OFFICEHOURS = 'ADD_OFFICEHOURS'
export const ADD_RATE = 'ADD_RATE'

/*
 * other constants
 */

export const Subjects = {
  MATHEMATICS: 'MATHEMATICS',
  COMPUTER_SCIENCE: 'COMPUTER_SCIENCE',
  ENGLISH: 'ENGLISH'
}

/*
 * action creators
 */

export const addSubject = (subject) => {
  return { type: ADD_SUBJECT, subject }
}

export const addCourse = (course) => {
  return { type: ADD_COURSE, course }
}

export const addClassName = (className) => {
  return { type: ADD_CLASSNAME, className }
}

export const addOfficeHours = (day, startTime, endTime) => {
  return {
    type: ADD_OFFICEHOURS,
    day,
    startTime,
    endTime
  }
}

export const addRate = (rate) => {
  return { type: ADD_RATE, rate }
}
