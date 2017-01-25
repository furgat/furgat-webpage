import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  render() {
    const selectedClass = 'selected-true';
    return (
      <div class='clearfix'>
        <ul class='tabs list-inline col-xs-12'>
            <li class='col-xs-12 col-sm-4'>
              <Link activeClassName={selectedClass} to='portfolio'>
                <i class='fa fa-gamepad'></i>&nbsp;PORTFOLIO
              </Link>
            </li>
            <li class='col-xs-12 col-sm-4'>
              <Link activeClassName={selectedClass} to='about'>
                <i class='fa fa-heartbeat'></i>&nbsp;ABOUT
              </Link>
            </li>
            <li class='col-xs-12 col-sm-4'>
              <Link activeClassName={selectedClass} to='radfolx'>
                <i class='fa fa-users'></i>&nbsp;RAD FOLX
              </Link>
            </li>
        </ul>
      </div>

    )
  }
}
