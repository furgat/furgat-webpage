import React from 'react';

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
        portfolio: [
            {
                title : 'sabertoot',
                repo : 'https://github.com/furgat/sabertoot',
                overview : 'A mobile-first browser client for mastodon.social',
                tags : ['react.js']
            },
            {
                title : 'angular-prompt',
                repo : 'https://github.com/furgat/angular-prompt',
                demo : 'https://furgat.github.io/angular-prompt/',
                overview : 'A mobile-first browser client for mastodon.social',
                tags : ['react.js']
            },
            {
                title : 'team-digest',
                repo : 'https://github.com/furgat/team-digest',
                demo : 'https://furgat.github.io/team-digest/',
                overview : 'webtool for planning and comparing pokemon teams',
                tags : ['react.js']
            },
        ]
    }
  }

  render() {
    const {portfolio} = this.state;

    var portfolioEntries = portfolio.map((entry, i) =>
      <div class='frontend portfolio info' key={entry.title}>
        <div class='row col-xs-12'>
          {entry.icon &&
          <div class='col-xs-12 col-sm-5'>
             <img src={entry.icon} class='col-xs-12' alt={entry.title} />
          </div>
          }
          <div class='col-xs-12 col-sm-7'>
            <div class='pad'>
              <a href={entry.repo} class='entry_title' target='_blank'>{entry.title}&nbsp;<i class='fa fa-chevron-circle-right'></i></a>
              <p>
                  {entry.overview}
              </p>
              <ul>
                  <li>
                    <a href={entry.repo} title={entry.title + ' on GitHub'} target='_blank'><i class='fa fa-github-alt fa-fw'></i>&nbsp;GitHub Repo<i class='fa fa-external-link'></i></a>
                  </li>
                  {entry.demo &&
                    <li>
                      <a href={entry.demo} title={'Live Demo for ' + entry.title} target='_blank'><i class='fa fa-arrow-circle-right fa-fw'></i>&nbsp;Live Demo<i class='fa fa-external-link'></i></a>
                    </li>
                  }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div class='pages clearfix'>
          <div class='info'>
          </div>
          {portfolioEntries}
      </div>
    )
  }
}
