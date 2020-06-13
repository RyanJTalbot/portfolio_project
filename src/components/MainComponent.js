import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Navbared from './Navbar';
import Footer from './Footer';
import Portfolio from './Portfolio';

class MainComponent extends React.Component {
  render() {
    const HomePage = () => {
      return (
        <div>
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route
              exact
              path='/directory'
              render={() => <Directory campsites={this.props.campsites} />}
            />
            <Route path='/directory/:campsiteId' component={CampsiteWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Route
              exact
              path='/aboutus'
              render={() => <About partners={this.props.partners} />}
            />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      );
    };
  }
}
export default MainComponent;
