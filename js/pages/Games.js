import React from 'react';

export default class Games extends React.Component {
  constructor() {
    super();
    this.state = {
        portfolio: [
            /*{
                title : 'LIKEWISE (SAME)',
                icon : 'img/likewise.jpg',
                location : '/likewise/',
                overview : 'A microgame built from my feelings on existing, growth, and isolation.',
                genre : 'Experimental',
                playtime : '5-10 minutes',
                filesize : '10.2MB',
                engine : 'Stencyl',
                engine_url : 'http://stencyl.com'
            },
            {
                title : 'MXGENDER',
                icon : 'img/mxgender.jpg',
                location : '/mxgender/',
                overview : 'A microgame about identities and assumptions.',
                genre : 'Puzzle',
                playtime : '5-10 minutes',
                filesize : '906KB',
                engine : 'Stencyl',
                engine_url : 'http://stencyl.com'
            },*/
        ]
    }
  }

  render() {
    const {portfolio} = this.state;

    var portfolioEntries = portfolio.map((entry, i) =>
      <div class='portfolio info'>
        <div class='row col-xs-12'>
          <div class='col-xs-12 col-sm-5'>
            <img src={entry.icon} class='col-xs-12' alt={entry.title} />
          </div>
          <div class='col-xs-12 col-sm-7'>
            <div class='pad'>
              <a href={entry.location} class='entry_title' target='_blank'>{entry.title}&nbsp;<i class='fa fa-chevron-circle-right'></i></a>
              <p>
                  {entry.overview}
              </p>
              <p>
                  <i class='fa fa-list-ul fa-fw'></i>&nbsp;{entry.genre}<br/>
                  <i class='fa fa-clock-o fa-fw'></i>&nbsp;{entry.playtime} // {entry.filesize}<br/>
                  <i class='fa fa-cogs fa-fw'></i>&nbsp;Made with <a href={entry.engine_url} target='_blank'>{entry.engine}&nbsp;<i class='fa fa-external-link'></i></a>
              </p>
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
