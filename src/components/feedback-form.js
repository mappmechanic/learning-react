import React, {Component} from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';

export default class FeedbackForm extends Component {
  constructor(...args) {
    super(...args);
    this.baseUrl = 'http://localhost:3000';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = {
      firstName:this.refs.firstName.value,
      lastName:this.refs.lastName.value,
      organization:this.refs.organization.value,
      selectedTutorial:this.refs.selectedTutorial.value,
      email:this.refs.email.value,
      feedback:this.refs.feedback.value,
    }
    // Making a Server Call
    fetch(this.baseUrl+'/feedback',{
      method:'POST',
      body: JSON.stringify(formData),
      headers:new Headers({
        'Content-Type':'application/json'
      })
    })
    .then((response) => response.json())
    .then(json => {
      debugger;
    });
  }

  render() {
    return (
      <div className="row feedback-form">
        <form action="" id="myForm" onSubmit={this.handleSubmit} className="col s12 m9">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Feedback Form</span>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input ref="firstName" type="text" className="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s12 m6">
                  <input ref="lastName" type="text" className="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input ref="organization" type="text" className="validate" />
                  <label for="organization">Organization</label>
                </div>
                <div className="input-field col s12 m6">
                  <select ref="selectedTutorial" defaultValue="0">
                    <option value="0" disabled>Choose your option</option>
                    { this.props.tutorialOptions.map((option,i) =>
                    <option key={i} value={option.id}>{option.name}</option>
                    )}
                  </select>
                  <label for="password">Session/Tutorial</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12">
                  <input ref="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12">
                  <textarea ref="feedback" className="materialize-textarea" rows="2"></textarea>
                   <label for="textarea1">Please type your feedback for this session/tutorial:</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="row">
              <div className="col s3">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div className="col s4">
                <button className="btn waves-effect waves-light" type="reset" name="action">Reset
                  <i className="material-icons right">replay</i>
                </button>
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
