import React, { Component } from 'react';
import './ProjectPage.scss';

import GridHelper from './GridHelper';

import projects from '../data/projects';

class ProjectPage extends Component {
  render() {
    const projectRoute = this.props.params.project;
    let project;
    projects.forEach((possibleProject) => {
      const isRoutedProject = projectRoute === possibleProject.route;
      if(isRoutedProject) {
        project = possibleProject;
      }
    });
    console.log(project);
    return (
      <div className='ProjectPage'>
        {project.title}
      </div>
    );
  }
}

export default ProjectPage;
