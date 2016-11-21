import React, { Component } from 'react';
import { Link } from 'react-router';
import isEmpty from 'lodash/isEmpty';
import './ProjectPage.scss';

import GridHelper from './GridHelper';
import ProjectHeader from './ProjectHeader';

import projects from '../data/projects';

import backArrow from '../assets/back-arrow.svg';
import marked from 'marked';

class Back extends Component {
  render() {
    return(
      <GridHelper className='ProjectPage-Back' size="wide" flex>
        <div className='ProjectPage-BackArrow'><Link to="/"><img src={backArrow} /></Link></div>
        <div className='ProjectPage-BackText'><Link to="/">More stuff</Link></div>
      </GridHelper>
    );
  }
}

class Media extends Component {
  render() {
    const items = Array.isArray(this.props.items) ? this.props.items : [this.props.items];
    const media = items.map((item, i) => {
      console.log(item);
      return (
        <GridHelper size="wide" key={i}>
          <img src={item} />
        </GridHelper>
      );
    });
    return(
      <div className='ProjectPage-Media'>
        {media}
      </div>
    );
  }
}

class ProjectPage extends Component {
  _getProjectData() {
    const projectRoute = this.props.params.project;
    let project;
    projects.forEach((possibleProject) => {
      const isRoutedProject = projectRoute === possibleProject.route;
      if(isRoutedProject) {
        project = possibleProject;
      }
    });
    return project;
  }
  render() {
    const project = this._getProjectData();
    const hasDetails = !isEmpty(project.details);
    const hasMedia = !isEmpty(project.media);
    const hasText = !isEmpty(project.text);
    return (
      <div className='ProjectPage'>
        <Back />
        <GridHelper>
          <ProjectHeader
            title={project.title}
            caption={project.caption}
            key={project.route}
          />
          {hasDetails &&
            <div className='ProjectPage-Details'>
              <div className="ProjectPage-DetailsBox"></div>
              <div className="ProjectPage-DetailsText" dangerouslySetInnerHTML={{ __html: marked(project.details) }} />
            </div>
          }
        </GridHelper>
        {hasMedia && <Media items={project.media} />}
        {hasText &&
          <GridHelper className='ProjectPage-Text'>
            <div dangerouslySetInnerHTML={{ __html: marked(project.text) }}></div>
          </GridHelper>
        }
        <Back />
      </div>
    );
  }
}

export default ProjectPage;
