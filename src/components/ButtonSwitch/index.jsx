import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const DEFAULT_THEME = 'orange';

class ButtonSwitch extends PureComponent {
  handleClick() {
    const {
      onChange, value, isActive, isDisabled, isEditable,
    } = this.props;

    if (isActive || isDisabled || !isEditable) return;

    onChange(value);
  };

  render() {
    const {
      isActive,
      isDisabled,
      theme,
      size,
    } = this.props;
    const classes = cn('button', [size], {
      'is-active': isActive,
      'is-disabled': isDisabled,
    });

    return (
      <div
        className={styles[theme] || styles[DEFAULT_THEME]}
        styleName={classes}
        onClick={() => this.handleClick}
      >
        { this.props.children }
      </div>
    );
  }
}

ButtonSwitch.propTypes = {
  onChange: PropTypes.func,
  // eslint-disable-next-line
  value: PropTypes.any.isRequired,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['small', '']),
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  // eslint-disable-next-line
  children: PropTypes.any,
};

ButtonSwitch.defaultProps = {
  onChange: () => {},
  isActive: false,
  isDisabled: false,
  isEditable: true,
  theme: DEFAULT_THEME,
  size: '',
};

export default CSSModules(ButtonSwitch, styles, { allowMultiple: true });