import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../ui/elements/Button';

storiesOf('elements/Button', module)
    .add('default', () => {
        return (
            <Fragment>
                <Button type="primary">Transfer In (primary)</Button>
                <Button>Buy (primary)</Button>
                <Button type="secondary">Sell (secondary)</Button>
            </Fragment>
        )
    })
    .add('disabled', () => {
        return (
            <Fragment>
                <Button disabled={true}>Transfer In</Button>
            </Fragment>
        )
    });
