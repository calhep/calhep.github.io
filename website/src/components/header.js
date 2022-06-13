import React from 'react';
import Navigation from './navigation';

import '../App.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />
      </header>
    )
  }
}

export default Header;