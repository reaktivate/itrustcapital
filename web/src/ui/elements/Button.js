import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonElement = styled.button({
  'height': '20px',
   'padding': '0 10px',
  'background-color': 'white',
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'border': 'solid 1px',
  'text-transform': 'uppercase',
  'white-space': 'nowrap'
},
  props => {
    if (props.disabled)
      return {
        'border-color': props.theme.colors.disabled
      }
    else
      switch (props.type) {
        case 'primary':
          return { 'border-color': props.theme.buttons.border.color.primary };

        case 'secondary':
          return { 'border-color': props.theme.buttons.border.color.secondary };
      }
  });

class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool
  };

  static defaultProps = {
    type: 'primary',
    disabled: false
  };

  render() {
    const props = this.props;

    return <ButtonElement {...props} />
  }
};

export default Button;
