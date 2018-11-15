import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../ui/elements/Button';

storiesOf('elements/Button', module)
    .add('default', () => {
        return (
            <Fragment>
                <Button type="buy">Buy</Button>
                <Button type="sell">Sell</Button>
            </Fragment>
        )
    })
    .add('disabled', () => {
        return (
            <Fragment>
                <Button type="buy" disabled="true">Buy</Button>
                <Button type="sell" disabled="true">Sell</Button>
            </Fragment>
        )
    });
