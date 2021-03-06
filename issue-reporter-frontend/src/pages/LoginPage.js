import React, { Component } from 'react';
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
import loginheader from '../assets/loginheader.png'

class LoginPage extends Component {
  
  state = {
    username: '',
    password: ''
    // currentUser: {}
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/")
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data =>{
      if (data.token)  {
        localStorage.token = data.token
        // this.setState({currentUser: data.user})
        console.log(data);
        
        this.props.history.push(`/${data.user.role}`)
      }
    })
  }

  render () {
    return (
  
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <div>
            <Image src={loginheader} /> 
          </div>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='username' 
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                />
  
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
    
              <Button color='blue' fluid size='large'>   
                Sign in
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? Please <a href='localhost:3000/signup'>sign Up.</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginPage;
