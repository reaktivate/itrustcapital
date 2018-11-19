import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import CurrencyFormat from 'react-currency-format';
import Panel from '../containers/Panel.js';

const Currency = styled.div({
  'font-weight': 'bold',
  'text-transform': 'uppercase'
});

const Amount = styled.div({
  'font-weight': 'bold'
});

const Status = styled.div(({ theme }) => ({
  'color': theme.colors.faded
}));

const LeftContainer = styled.div({
  display: 'flex',
  'flex-wrap': 'wrap',
  '> *': {
    'margin-right': '30px'
  }
});

const getStatusText = status => {
  switch (status) {
    case 'waiting':
      return 'waiting for funds';

    case 'done':
      return 'done';

    default:
      return '';
  }
}

class Balance extends PureComponent {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['', 'waiting', 'done'])
  };

  static defaultProps = {
    currency: 'USD',
    amount: false,
    status: ''
  };

  render() {
    const props = this.props;

    return (
      <Panel>
        <LeftContainer>
          <Currency>{props.currency} Balance</Currency>
          <Amount>
            <CurrencyFormat value={props.amount} displayType={'text'} thousandSeparator={true}/>
          </Amount>
          <Status>{getStatusText(props.status)}</Status>
        </LeftContainer>
        <Button>Transfer in</Button>
      </Panel>
    )
  }
};

export   default Balance;
