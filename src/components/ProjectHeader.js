import React, { Component } from 'react';
import { Link } from 'react-router';
import isEmpty from 'lodash/isEmpty';
import './ProjectHeader.scss';

import GridHelper from './GridHelper';

class ProjectHeader extends Component {
  render() {
    const hasLink = !isEmpty(this.props.link);
    const style = {
      top: this._getRandomArbitrary(10, 20)+'%',
      transform: 'translateX('+this._getRandomArbitrary(-20, 10)+'%) rotate('+this._getRandomArbitrary(-2.5, 1)+'deg)',
      backgroundSize: this._getRandomArbitrary(100, 120)+'% 70%',
    }
    return (
      <div className='ProjectHeader'>
        {hasLink && <Link to={this.props.link.to}></Link>}
        <h2>{this.props.title}<span style={style}></span></h2>
        <p>{this.props.caption}</p>
      </div>
    );
  }

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}

ProjectHeader.propTypes = {
  link: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  caption: React.PropTypes.string,
};
ProjectHeader.defaultProps = {};

export default ProjectHeader;
