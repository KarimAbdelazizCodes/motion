/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Registration from './register';
import { Congratulations } from './congratulations';
import Verification from './verification';

export const SignUp = props => {
    let [index, setIndex] = useState(1);

    const nextStep = () => {
        setIndex(index + 1);
    };

    return (
        <>
            {index === 1 ? <Registration nextpage={nextStep} /> : null}
            {index === 2 ? <Congratulations nextpage={nextStep} /> : null}
            {index === 3 ? <Verification /> : null}
        </>
    );
};
