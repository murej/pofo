import React, { Component } from 'react';
import './Header.scss';

import GridHelper from './GridHelper';

class Header extends Component {
  render() {
    return (
      <GridHelper className='Header' size='wide' span={10}>
        <h1>Jure Martinec is a European designer and technologist, researching how digital might be shaping the world, often through code and interactive artifacts. He currently works at IDEO and is with Ansambel.</h1>
        <p>Occasionaly he collaborates on projects and develop highly functional prototypes. Get in touch and follow on Twitter, LinkedIn or GitHub.</p>
      </GridHelper>
    );
  }
}

export default Header;
