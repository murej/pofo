import React, { Component } from 'react';
import './ProjectIndexPage.scss';

import ProjectHeader from './ProjectHeader';
import GridHelper from './GridHelper';

import projects from '../data/projects';

class ProjectIndexPage extends Component {

  render() {
    const projectLinks = projects.map( (project) => {
      return (
        <ProjectHeader
          link={{ to: project.route }}
          title={project.title}
          caption={project.caption}
          key={project.route}
        />
      );
    })

    return (
      <GridHelper className='ProjectIndexPage' span={9}>
        {projectLinks}
      </GridHelper>
    );
  }
}

export default ProjectIndexPage;
