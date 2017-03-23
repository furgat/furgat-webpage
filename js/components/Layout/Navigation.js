import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  render() {
    const selectedClass = 'selected-true';
    return (
      <nav class='tabs clearfix'>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-3' to='frontend'>
          <i class='fa fa-terminal'></i>&nbsp;FRONT-END
        </Link>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-3' to='games'>
          <i class='fa fa-gamepad'></i>&nbsp;GAMES
        </Link>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-3' to='about'>
          <i class='fa fa-heartbeat'></i>&nbsp;ABOUT
        </Link>
        <Link activeClassName={selectedClass} class='col-xs-12 col-md-3' to='radfolx'>
          <i class='fa fa-users'></i>&nbsp;RAD FOLX
        </Link>
      </nav>

    )
  }
}
