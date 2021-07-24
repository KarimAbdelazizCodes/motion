/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { LoginContainer, TopContainer, MidContainer, LoginInput } from './styled';
import { BaseButton } from '../../layouts/button/styled'
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Axios from '../../../Axios';
import { useForm } from 'react-hook-form'

// styling
export const DontHaveAcc = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-right: 20px;
`;

export const LargeText = styled.h1`
    font-size: ${props => props.theme.larger};
    font-weight: ${props => props.theme.largeWeight};
    margin-bottom: 50px;
`;

export const Login = props => {
    // using react hook form
    const { register, handleSubmit, formState: { errors }} = useForm();
    // display error message to the user if email or password are incorrect
    const [ error, setError] = useState(null);

    const dispatch = useDispatch();

    const userLogin = async (data) => {
        const url = 'auth/token/';

        // fetch token, clear username and password, dispatch token to Redux state, save token to local storage, and then redirect to posts if token is saved
        try {
            const response = await Axios.post(url, data);
            if (response.status === 200) {
                const token = response.data.access;
                console.log(response.data);
                dispatch({ type: 'ADD_TOKEN', payload: token });
                localStorage.setItem('token', token);
                props.history.push('/');
            }
        } catch (e) {
            setError('Incorrect email or password')
        }
    };

    return (
        <LoginContainer>
            <TopContainer>
                <DontHaveAcc>Don&apos;t have an account?</DontHaveAcc>
                <BaseButton onClick={() => props.history.push('/auth/signup')} design={'small'}> SIGN UP </BaseButton>
            </TopContainer>
            <MidContainer>
                <LargeText>Sign In</LargeText>
                <form onSubmit={handleSubmit(userLogin)}>

                    {errors.email && <p>{errors.email.message}</p>}
                    <LoginInput type='email' placeholder='Email address' {...register('email', { required: 'Invalid entry' }) }/>

                    {errors.password && <p>{errors.password.message}</p>}   
                    <LoginInput type='password' placeholder='Password' {...register('password', { required: 'Password required'})}/>
                    {error ? <h3 style={{"color": "red"}}>{error}</h3> : null}
                    

                    <BaseButton type='submit'>SIGN IN</BaseButton>
                </form>
            </MidContainer>
        </LoginContainer>
    );
};
