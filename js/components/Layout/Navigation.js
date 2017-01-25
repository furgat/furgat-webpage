import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  render() {
    const selectedClass = 'selected-true';
    return (
      <nav class='tabs clearfix'>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-4' to='portfolio'>
          <i class='fa fa-gamepad'></i>&nbsp;PORTFOLIO
        </Link>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-4' to='about'>
          <i class='fa fa-heartbeat'></i>&nbsp;ABOUT
        </Link>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-4' to='radfolx'>
          <i class='fa fa-users'></i>&nbsp;RAD FOLX
        </Link>
      </nav>

    )
  }
}
