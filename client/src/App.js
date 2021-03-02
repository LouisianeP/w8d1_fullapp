import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route
          exact path='/projects'
          component={Projects}
        />
        <Route
          exact path='/projects/:id'
          component={ProjectDetails}
        />
        <Route
          exact path='/signup'
          // component={Signup}
          // if you want to pass props in the routing we use a so called render prop
          render={props => <Signup setUser={this.setUser} {...props} />}
        />

      </div>
    );
  }
}

export default App;
