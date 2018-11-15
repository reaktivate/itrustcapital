import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Balance from '../../ui/elements/Balance';

storiesOf('elements/Balance', module)
    .add('default', () => {
        return (
            <Fragment>
                <Balance currency={'USD'} amount={1234.56} status={'waiting'}/>
                <Balance currency={'EUR'} amount={2223232323.43}/>
            </Fragment>
        )
    });