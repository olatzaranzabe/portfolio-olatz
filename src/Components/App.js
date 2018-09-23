import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Curriculum from './Curriculum';

class App extends Component {
  render() {
    const menus = ['Quién soy', 'Mi Curriculum', 'Proyectos', 'Contacta'];
    console.log(menus)

    return (
      <div className="App">
        <Header menus={menus} />
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
        <Footer />
      </div>
    );
  }
}

export default App;
