import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Navbared from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className='ryan'>
        <Header tagline='Portfolio' />
        <div className='top'>
          <Navbared className='navbar' />
        </div>
        <About />
      </div>
    );
  }
}

export default App;
