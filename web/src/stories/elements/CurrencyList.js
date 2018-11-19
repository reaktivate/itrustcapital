import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import CurrencyList from '../../ui/elements/CurrencyList';

storiesOf('elements/CurrencyList', module)
    .add('default', () => {
        const items = [
            {
                id: 1,
                currency: {
                    id: 1,
                    name: 'bitcoin',
                },
                amount: 1,
                rate: 222
            },
            {
                id: 2,
                currency: {
                    id: 5,
                    name: 'bitcoin cash',
                },
                amount: 3,
                rate: 234
            },
            {
                id: 3,
                currency: {
                    id: 56,
                    name: 'ethereum',
                },
                amount: 7,
                rate: 545454
            },
        ];
        return (
            <CurrencyList items={items} />
        )
    });