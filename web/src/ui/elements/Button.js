import React from 'react';
import styled from 'styled-components';

const Button = styled.button({
  'height': '20px',
  'width': '50px',
  'background-color': 'white',
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'border': 'solid 1px',
  'text-transform': 'uppercase'
},
  props => {
    if (props.disabled)
      return {
        'border-color': 'grey'
      }
    else
      switch (props.type) {
        case 'sell':
          return { 'border-color': 'blue' };

        case 'buy':
          return { 'border-color': 'green' };
      }
  });

export default Button;
