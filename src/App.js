import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
