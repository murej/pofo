import React, { Component } from 'react';
import { Link } from 'react-router';
import './ProjectIndexPage.scss';

import GridHelper from './GridHelper';

import projects from '../data/projects';

class ProjectIndexPage extends Component {

  render() {
    const projectLinks = projects.map( (project) => {
      const style = {
        top: this._getRandomArbitrary(10, 20)+'%',
        transform: 'translateX('+this._getRandomArbitrary(-20, 10)+'%) rotate('+this._getRandomArbitrary(-4, 2)+'deg)',
        backgroundSize: this._getRandomArbitrary(100, 120)+'% 70%',
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
      <GridHelper className='ProjectIndexPage' span={9}>
        {projectLinks}
      </GridHelper>
    );
  }

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}

export default ProjectIndexPage;
