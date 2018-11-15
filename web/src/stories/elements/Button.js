import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../ui/elements/Button';
import Panel from '../../ui/containers/Panel';

storiesOf('elements/Button', module)
    .add('default', () => {
        return (
            <Panel>
                <Button type="primary">Transfer In (primary)</Button>
                <Button>Buy (primary)</Button>
                <Button type="secondary">Sell (secondary)</Button>
            </Panel>
        )
    })
    .add('disabled', () => {
        return (
            <Panel>
                <Button disabled={true}>Transfer In</Button>
            </Panel>
        )
    });
