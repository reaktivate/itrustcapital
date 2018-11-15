import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import CurrencyFormat from 'react-currency-format';
import Panel from '../containers/Panel.js';

const Table = styled.table({
  width: '100%'
});

const Row = styled.tr({});

const HeaderCell = styled.td((props) => ({
  'text-align': props.alignRight ? 'right' : 'left'
}));

const Cell = styled.td((props) => ({
  'text-align': props.alignRight ? 'right' : 'left',
  'white-space': 'nowrap'
}));

class List extends Component {
  render() {
    const props = this.props;

    return (
      <Table>
        <thead>
          <Row>
            <HeaderCell>Cryptocurrency</HeaderCell>
            <HeaderCell alignRight={true}>Holdings</HeaderCell>
            <HeaderCell alignRight={true}>Market price</HeaderCell>
            <HeaderCell alignRight={true}>USD Balance</HeaderCell>
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

class ListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <Row>
        <Cell>{item.name}</Cell>
        <Cell alignRight={true}>
          <CurrencyFormat value={item.amount} displayType={'text'} thousandSeparator={true}/>
        </Cell>
        <Cell alignRight={true}>
          <CurrencyFormat value={item.rate} displayType={'text'} thousandSeparator={true}/>
        </Cell>
        <Cell alignRight={true}>
          <CurrencyFormat value={item.amount * item.rate} displayType={'text'} thousandSeparator={true}/>
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
