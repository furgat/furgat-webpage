import React from 'react';

export default class RadFolx extends React.Component {
  constructor() {
    super();
    this.state = {
        radfolx: [
            {
                name : 'Nikki',
                icon : 'https://pbs.twimg.com/profile_images/2473172437/bsoc376sljihwjzp7ycv_400x400.png',
                url : 'http://skirtdingo.neocities.org/',
                bio : 'genderpunk jelly skirt-dingo'
            },
            {
                name : 'Tooth',
                icon : 'https://pbs.twimg.com/profile_images/531475928623218689/EnXckKAd_400x400.png',
                url : 'http://toothbops.neocities.org/',
                bio : ''
            },
            {
                name : 'h34rken!',
                icon : 'img/hearken.jpg',
                url : 'https://h34rken.bandcamp.com/',
                bio : 'agender #cripplepunk musician/glitch artist'
            },
            {
                name : 'Rabbit Rabbit',
                icon : 'img/rabbitrabbit.jpg',
                url : 'https://rabbitrabbit.bandcamp.com/',
                bio : 'social justice berserker'
            }
        ]
    }
  }

  render() {
    const {radfolx} = this.state;

    var radFolxList = radfolx.map((entry, i) =>
      <div key={i} class='radfolx col-xs-12 col-sm-6 col-md-3'>
        <img src={entry.icon} alt={entry.name} /><br/>
        <a href={entry.url} target='_blank'>{entry.name}&nbsp;<i class='fa fa-external-link'></i></a><br/>
        {entry.bio}<br/>
      </div>
    );

    return (
      <div class='pages clearfix'>
        {radFolxList}
      </div>
    )
  }
}
