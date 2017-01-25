import React from 'react';

import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/portfolio");
  }

  render() {
    return (
      <div class='top-container col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2'>
        <Header />
        <div id='content'>
          <Navigation />
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
