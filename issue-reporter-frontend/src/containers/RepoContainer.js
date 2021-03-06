import React, { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react'

class RepoContainer extends Component {

  render() { 

  const defaultTitle =
    <>
    <h3> Issue Reporter for Learn.co </h3>
    <h4>
      -- A feature proposal for a student-driven issue reporting system to Flatiron School's learning platform
    </h4>
    </>

  // const repoTitle = this.props.currentRepo.master_repo

  const readme = 
    <div>
    <p> 
    This is the mod 3/4 project for my coding bootcamp in Flatiron School/Access Lab. It adds a survey interface to the existing learn.co platform to allow students to report bugs and offer fixes to the study labs. Students who offers bug fixes are awarded 'karma', a learn.co rewarding mechanism.<br/>
    <br/>
    The lab completion and survey data are aggregated in an analytics dashboard. A list view of issues sorted by the completion rate helps the engineering team prioritize tasks. Survey results of each lab includes students' solution to these bugs, enabling quick fixes to these problems.
    <br/>
    {/* The issues will be automatically reported to the perspective github repo.  */}
    </p>
  
    <h4>Usage:</h4>
    <p>A user can log in as either a student or a teacher. Student users and Teacher users go to two different pages.</p>
  
    <h4>Student page:</h4>
    <ul>
    <li>On login, a student avartar shows up, and this student's forked repos are updated on the top Nav. </li>
    <li>The user can select a study lab from the top nav under "React Labs". </li>
    <li>The user can select a lab from the top nav bar, which shows up in the the main area.</li>
    <li>
    On clicking the "Next lesson" on the right side nav bar, the student user will be prompted to a survey form. 
    </li>
    <li>
    The user can answer and submit the survey.
    </li>
    <li>
    If the user provides a fix to the reported issue, they are awarded a karma point, which is reflected on the top nav.
    </li>
    <li>The survey and karma are updated in the database.</li>
    </ul>
  
  
    <h4>Teacher page: </h4>
    <ul>
    <li>
    Once logged in, the user is presented with a dashboard showing analysis of lab completion data.
    </li>
    <li>
    Completion and survey data of study labs with less than 50% completion rate are detailed in the table below the data analytics graphics
    </li>
    <li>
    User can click to expand an repository and see the survey of each student submission
    </li>
    <li> The user can use the top nav to navigate to the student view of the platform </li>
    

    </ul>
  
    <h4>Built With:</h4>
    <ul>
    <li>
    ReactJS
    </li>
    <li>
    Ruby on Rails
    </li>
  
    <li>
    PostgreSQL database
    </li>
  
    <li>
    Github API/Octokit gem
    </li>
  
    <li>
    JSON Web Token(JWT) Authentication
    </li>
  
    <li>
    Semantic UI react
    </li>
  
    <li>
    Tableau/Tableau-react - data visualization
    </li>

    <li>
    React-table package - a lightweight, fast and extendable datagrid built for React
    </li>
  
    </ul>
  
    <h4>Credits:</h4>
    <p>Numerous people in the Access Lab helped me with this project. These include our lead instructors Graham, Kevin and Eric, our coaches Lezil, Marzen and Greg; and my fellow classmates Daniella, Rachel, Joe, Fan. Their contributions are recorded in the git commits messages. I am grateful for everyone's help.</p>
    </div>
  
    return(
      <>
        <Container textAlign='left'>
          {defaultTitle}
        <Divider />
          {readme}
        </Container>
      </>
    );
  }
}
 
export default RepoContainer;