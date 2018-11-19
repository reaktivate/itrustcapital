import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import CurrencyFormat from 'react-currency-format';
import Panel from '../containers/Panel.js';
import plusIcon from '../icons/raw/plus.svg';

const Table = styled.table({
  width: '100%'
});

const Row = styled.tr({});

const HeaderCell = styled.td((props) => ({
  'text-align': props.align || 'center',
  'text-transform': 'uppercase',
  'font-weight': 'bold'
}));

const Cell = styled.td((props) => ({
  'text-align': props.align || 'center',
  'white-space': 'nowrap'
}));

class List extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const props = this.props;

    return (
      <Table>
        <thead>
          <Row>
            <HeaderCell>Cryptocurrency</HeaderCell>
            <HeaderCell>Holdings</HeaderCell>
            <HeaderCell>Market price</HeaderCell>
            <HeaderCell>USD Balance</HeaderCell>
            <HeaderCell>Operation</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {
            props.items.map(item => <ListItem key={item.id} item={item} />)
          }
        </tbody>
      </Table>
    )
  }
};

const Icon = styled.img({
  height: '17px',
  width: '17px',
  background: 'green'
});

class CryptoCurrency extends Component {
  static propTypes = {
    currency: PropTypes.object.isRequired
  }

  render() {
    const props = this.props;

    return (
      <Fragment>
        <Icon src={plusIcon}></Icon>
        {props.currency.name}
      </Fragment>
    )
  }
}

class ListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <Row>
        <Cell align="left">
          <CryptoCurrency currency={item.currency}></CryptoCurrency>
        </Cell>
        <Cell>
          <CurrencyFormat value={item.amount} displayType={'text'} thousandSeparator={true} />
        </Cell>
        <Cell>
          <CurrencyFormat value={item.rate} displayType={'text'} thousandSeparator={true} />
        </Cell>
        <Cell>
          <CurrencyFormat value={item.amount * item.rate} displayType={'text'} thousandSeparator={true} />
        </Cell>
        <Cell>
          <div style={{ 'display': 'flex', 'whiteSpace': 'nowrap' }}>
            <Button type="primary">Buy</Button>
            <Button type="secondary">Sell</Button>
          </div>
        </Cell>
      </Row>
    )
  }
}

class CurrencyList extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    const props = this.props;

    return (
      <Panel>
        <List items={props.items}></List>
      </Panel>
    )
  }
};

export default CurrencyList;
