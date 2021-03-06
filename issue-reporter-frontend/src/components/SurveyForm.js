import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SurveyForm extends Component {
  
  state = {
    reposUser: {},
    repos_user_id: null, 
    completion_status:'',
    incompleteReason:'',
    issueType:'',
    problemAnalysis:'',
    suggestedFix:''
   }

  componentDidMount () {
    // find reposUser using currentRepo and currentUser
    fetch(`${process.env.REACT_APP_API_URL}/repos_users/find_repos_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepted': 'application/json'
      },
      body: JSON.stringify({ 
        repo_id: this.props.currentRepo.id, 
        user_id: this.props.currentUser.id
      })
    }).then(res => res.json())
    .then(reposUser => {
      if (reposUser) {
        this.setState({reposUser: reposUser})
      }
      else {
        return "don't have a reposUser yet"
      }
    })
  }
  
  //semantic ui onClick comes with data that includes all the props
  handleChange = (e, data) => this.setState({ [data.name]: data.value })

  handleSubmit = (e) => {
    e.preventDefault();

    //if reposUser exist, post new survey to the database
    if (this.state.reposUser) {
      fetch(`${process.env.REACT_APP_API_URL}/surveys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepted': 'application/json'
        },
        body: JSON.stringify({ 
          repos_user_id: this.state.reposUser.id,
          completion_status: 0,
          incompleteReason: this.state.incompleteReason,
          issueType: this.state.issueType,
          problemAnalysis: this.state.problemAnalysis,
          suggestedFix: this.state.suggestedFix
        })
      }).catch(error => alert(error))  
    } 
    else {
      alert ("This user has not forked this repo")
    }

    //Reward bug fixing effort with Karma
    if (this.state.suggestedFix !== '') {

      alert('Good deed! You just earned 1 karma!')

      // increase karma count
      this.props.increaseKarmaCount();
      
      // redirect to next lesson
      this.props.goToNextRepo();

      //Close the portal window
      this.props.handleClose();

    } else {

      alert('Thank you for your input, good luck with your labs!')
      
      // redirect to next lesson
      this.props.goToNextRepo();

      //Close the portal window
      this.props.handleClose();

    }

  }

  render() { 

    return (  
      <Form onSubmit={this.handleSubmit}>
  
      <Form.Group grouped>
          <label>Please tell us why you did not complete this lab:</label>
          <Form.Radio
            name='incompleteReason'
            label="A. Too many labs today, don't have time to complete everything, just want to browse through."
            value="A"
            checked={this.state.incompleteReason === 'A'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="B. Spent a long time on it but can't finish.."
            value="B"
            checked={this.state.incompleteReason === 'B'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="C. I can't finish it because there is a bug in this lab."
            value="C"
            checked={this.state.incompleteReason === 'C'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="D. I don't know how to do this lab."
            value="D"
            checked={this.state.incompleteReason === 'D'}
            onChange={this.handleChange}
          />
        </Form.Group>

      <Form.Group grouped>
        <label> I think the problem with this lab is: </label>
        <Form.TextArea name='problemAnalysis' rows='1' value={this.state.problemAnalysis}  onChange={this.handleChange} />

        <label> I fixed this lab, and this is what I did.</label>
        <Form.TextArea name='suggestedFix' value={this.state.suggestedFix} rows='1' onChange={this.handleChange} />
      </Form.Group>
  
      <Form.Button>Submit</Form.Button>
    </Form>

    );
  }
}

export default SurveyForm