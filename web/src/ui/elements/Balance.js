import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import CurrencyFormat from 'react-currency-format'

const Currency = styled.div({
  'font-weight': 'bold',
  'text-transform': 'uppercase',

});

const Amount = styled.div({
  'font-weight': 'bold'
});

const Status = styled.div(({ theme }) => ({
  'color': theme.colors.faded
}));

const BalanceContainer = styled.div(({ theme }) => ({
  'display': 'flex',
  'height': '60px',
  'align-items': 'center',
  'justify-content': 'space-between',
  'padding': '0 20px',
  'white-space': 'nowrap',
  'background': theme.panel.background,
  'box-shadow': '2px 2px 5px grey',
  'font-family': 'arial',
}));

const LeftContainer = styled.div({
  display: 'flex',
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
      <BalanceContainer>
        <LeftContainer>
          <Currency>{props.currency} Balance</Currency>
          <Amount>
            <CurrencyFormat value={props.amount} displayType={'text'} thousandSeparator={true}/>
          </Amount>
          <Status>{getStatusText(props.status)}</Status>
        </LeftContainer>
        <Button>Transfer in</Button>
      </BalanceContainer>
    )
  }
};

export default Balance;
