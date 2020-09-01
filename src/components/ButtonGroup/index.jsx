import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class ButtonGroup extends PureComponent {
   renderButtons() {
    const { currentValue, onChange, isEditable } = this.props;

    return React.Children.map(this.props.children, child => React.cloneElement(child, {
      onChange,
      isActive: child.props.value === currentValue,
      isEditable,
    }));
  }

  render() {
    const { theme, className, justifyContent } = this.props;
    const classes = cn(className, theme, justifyContent);

    return (
      <div styleName={classes}>
        {this.renderButtons()}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  // eslint-disable-next-line
  children: PropTypes.any.isRequired,
  // eslint-disable-next-line
  currentValue: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string,
  isEditable: PropTypes.bool,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
};

ButtonGroup.defaultProps = {
  theme: 'white',
  isEditable: true,
  className: 'group',
  justifyContent: 'space-between',
};

export default CSSModules(ButtonGroup, styles, { allowMultiple: true })