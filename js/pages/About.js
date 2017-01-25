import React from 'react';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
        icon: './img/avatar.png',
        icon_alt: 'icon by @toothmonsterr',
        bio: 'i never know how to write bios',
        social_media: [
          {
              'service' : 'github',
              'icon' : 'fa fa-github-alt fa-fw',
              'profile' : 'furgat',
              'url' : 'http://github.com/furgat'
          },
          {
              'service' : 'soundcloud',
              'icon' : 'fa fa-soundcloud fa-fw',
              'profile' : 'furgat',
              'url' : 'https://soundcloud.com/furgat'
          },
          {
              'service' : 'twitter',
              'icon' : 'fa fa-twitter fa-fw',
              'profile' : '@furgat',
              'url' : 'http://twitter.com/furgat'
          },
          {
              'service' : 'mastodon',
              'icon' : 'fa fa-pencil-square fa-fw',
              'profile' : '@furgat',
              'url' : 'http://mastodon.social/users/furgat'
          }
      ]
    }
  }

  render() {
    const {icon, icon_alt, icon_credit, bio, social_media} = this.state;

    var socialMediaList = social_media.map((acct, i) =>
      <li key={i}>
        <i class={acct.icon}></i>&nbsp;
        <a href={acct.url} target='_blank'>
          {acct.profile} on {acct.service}&nbsp;<i class='fa fa-external-link'></i>
        </a>
      </li>
    );

    return (
      <div class='pages clearfix'>
        <img src={icon} alt={icon_alt} class='col-xs-4' />
        <div class='info col-xs-8'>
          <h1>ABOUT</h1>
          <p>
              {bio}
          </p>
          <p>
              Please please please also check out the cool people in the <i class='fa fa-users'></i>&nbsp;RAD FOLX tab!
          </p>
          <h1>Also find me at:</h1>
          <ul class='media'>
              {socialMediaList}
          </ul>
        </div>
      </div>
    )
  }
}
