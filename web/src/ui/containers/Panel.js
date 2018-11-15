import styled from 'styled-components';

const Panel = styled.div(({ theme }) => ({
    'display': 'flex',
    'flex-wrap': 'wrap',
    'align-items': 'center',
    'justify-content': 'space-between',
    'padding': '10px 20px',
    'white-space': 'wrap',
    'background': theme.panel.background,
    'box-shadow': '2px 2px 5px grey',
    'font-family': 'arial',
    'overflow': 'hidden',
    'margin-bottom': '10px'
  }));

  export default Panel;
