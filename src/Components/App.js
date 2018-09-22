import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Main from './Main';
import Curriculum from './Curriculum';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route
            exact path='/'
            render={() => <Main />
            } />
          <Route
            path='/cv' 
            render={(p) => <Curriculum />
              }
          />
        </Switch>
        
      </div>
    );
  }
}

export default App;
