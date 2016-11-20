import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.scss';

import GridHelper from './components/GridHelper';
import GridColumn from './components/GridColumn';

import projects from './data/projects';

class App extends Component {
  render() {

    const projectLinks = projects.map( (project) => {
      const style = {
        top: this._getRandomInt(10, 20)+'%',
        transform: 'translateX('+this._getRandomInt(-20, 10)+'%) rotate('+this._getRandomInt(-5, 5)+'deg)',
        backgroundSize: this._getRandomInt(100, 120)+'% 70%',

      }
      return (
        <div className='App-ProjectLink' key={project.route}>
          <Link to={project.route}></Link>
          <h2>{project.title}<span style={style}></span></h2>
          <p>{project.caption}</p>
        </div>
      );
    })

    return (
      <div className='App'>
        <GridHelper className='App-Header' size='wide'>
          <h1>Jure Martinec is a European designer and technologist, researching how digital might be shaping the world, often through code and interactive artifacts. He currently works at IDEO and is with Ansambel.</h1>
          <p>Occasionaly he collaborates on projects and develop highly functional prototypes. Get in touch and follow on Twitter, LinkedIn or GitHub.</p>
        </GridHelper>
        <GridHelper className='App-ProjectIndex'>
          {projectLinks}
        </GridHelper>
      </div>
    );
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default App;
