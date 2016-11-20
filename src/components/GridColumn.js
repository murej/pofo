import React from 'react';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';

import './GridColumn.scss';

class GridColumn extends React.Component {
  render() {
    return <div class="GridColumn">asdf</div>;
  }
}

GridColumn.displayName = 'GridHelper';

// Uncomment properties you need
GridColumn.propTypes = {
  flex: React.PropTypes.bool,
  size: React.PropTypes.string,
  className: React.PropTypes.string
};
GridColumn.defaultProps = {
  flex: false,
  size: "normal"
};

export default GridColumn;
