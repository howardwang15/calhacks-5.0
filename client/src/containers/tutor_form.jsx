import React from 'react';
import { connect } from 'react-redux';
import { addSubject, addCourse, addClassName, addOfficeHours, addRate } from '../actions/tutor_form_actions';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleClassNameChange = this.handleClassNameChange.bind(this);
    this.handleOfficeHoursChange = this.handleOfficeHoursChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubjectChange(event) {
    addSubject(event.target.value);
  }

  handleCourseChange(event) {
    addCourse(event.target.value);
  }

  handleClassNameChange(event) {
    addClassName(event.target.value);
  }

  handleOfficeHoursChange(event) {
    addOfficeHours(event.target.value, 12, 2);
  }

  handleRateChange(event) {
    addRate(event.target.value);
  }

  handleSubmit(event) {
    alert('Submit');
  }

  render() {
    const { subject, course, className, officeHours, rate } = this.props;
    return (
      <form>
        <label>
          Subject:
          <input type="text" subject={subject} onChange={this.handleSubjectChange} />
        </label>
        <button onClick={this.handleSubmit}>
          Submit
        </button>
        <label>
          Course:
          <input type="text" onChange={this.handleCourseChange} />
        </label>
        <label>
          Class Name:
          <input type="text" onChange={this.handleClassNameChange} />
        </label>
        <label>
          Office Hours:
          <input type="text" onChange={this.handleOfficeHoursChange} />
        </label>
        <label>
          Rate:
          <input type="text" onChange={this.handleRateChange} />
        </label>
      </form>
    );

  }
}

const mapStateToProps = (state) => {
            return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSubject: (subject) => dispatch(addSubject(subject)),
        addCourse: (course) => dispatch(addCourse(course)),
        addClassName: (className) => dispatch(addClassName(className)),
        addOfficeHours: (officeHours) => dispatch(addOfficeHours(officeHours)),
        addRate: (rate) => dispatch(addRate(rate))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NameForm);
