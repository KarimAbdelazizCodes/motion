/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LoginContainer } from '../../login/styled'
import { BaseInput } from '../../../layouts/input/styled'
import { BaseButton } from '../../../layouts/button/styled'
import { LargeText } from '../../login'
import styled from 'styled-components'
import Axios from '../../../../Axios'
import { withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: ${props => props.theme.smaller};
        color: red;
    }

`
const ControlledForm = styled(LoginContainer)`
    height: 100%;
    justify-content: center;

    h3 {
        color: red;
        margin-top: 40px;
    }
`

const Verification = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

    const submitForm = async (data) => {
        const url = 'auth/registration/validation/';
        try {
            const response = await Axios.patch(url, data);
            if (response.status === 200) {
                props.history.push('/auth/login')
            } else {
                console.log('error')
            }
        } catch (error) {
            setError('Incorrect password or verification code')
        }

    }


    return (
        <ControlledForm>
            <LargeText>Verification</LargeText>
            <Form onSubmit={handleSubmit(submitForm)}>
                {errors.email && <p>{errors.email.message}</p>}
                <BaseInput placeholder='Email address' type='email' {...register('email', { required: 'This field is required' })} />

                {errors.code && <p>{errors.code.message}</p>}
                <BaseInput placeholder='Verification Code' type='number' {...register('code', { required: 'This field is required' })} />

                {errors.username && <p>{errors.username.message}</p>}
                <BaseInput placeholder='Username' type='text' {...register('username', { required: 'This field is required' })} />

                {errors.first_name && <p>{errors.first_name.message}</p>}
                <BaseInput placeholder='First name' type='text' {...register('first_name', { required: 'This field is required' })} />

                {errors.last_name && <p>{errors.last_name.message}</p>}
                <BaseInput placeholder='Last name' type='text' {...register('last_name', { required: 'This field is required' })} />

                {errors.password && <p>{errors.password.message}</p>}
                <BaseInput placeholder='Password' type='password' 
                {...register('password', { required: 'This field is required', minLength: { value: 8, message: 'Password too short' } })} />

                {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                <BaseInput placeholder='Password repeat' type='password' 
                {...register('password_repeat', { required: 'This field is required', minLength: { value: 8, message: 'Password too short' } })} />

                <BaseButton type='submit'>COMPLETE</BaseButton>
            </Form>
            {error ? <h3>{error}</h3> : null} 
        </ControlledForm>
    )
}

export default withRouter(Verification)