import React, { Component } from 'react';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';

import './GridHelper.scss';

class GridHelper extends Component {
  render() {
    const className = this.props.className
    const hasClassName = !isEmpty(className)
    const isWide = this.props.size === "wide";

    const classNames = cx({
      "GridHelper": true,
      "GridHelper--flex": this.props.flex,
      "GridHelper--wide": isWide,
      [className]: hasClassName
    });
    return (
      <div className={classNames}>
        {!isWide &&
          <div className="GridHelper-Margin">
            <div className="GridHelper-Gutter"></div>
          </div>
        }
        <div className="GridHelper-ContentWrapper">
          <div className="GridHelper-Content">
            {this.props.children}
          </div>
        </div>
        {!isWide &&
          <div className="GridHelper-Margin">
            <div className="GridHelper-Gutter"></div>
          </div>
        }
      </div>
    );
  }
}

GridHelper.displayName = 'GridHelper';

// Uncomment properties you need
GridHelper.propTypes = {
  flex: React.PropTypes.bool,
  size: React.PropTypes.string,
  className: React.PropTypes.string
};
GridHelper.defaultProps = {
  flex: false,
  size: "normal"
};

export default GridHelper;
