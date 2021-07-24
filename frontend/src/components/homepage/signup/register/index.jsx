/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LoginContainer, TopContainer, MidContainer } from '../../login/styled'
import { BaseButton } from '../../../layouts/button/styled'
import { BaseInput } from '../../../layouts/input/styled'
import Axios from '../../../../Axios'
import { DontHaveAcc, LargeText } from '../../login'
import { withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Registration = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ error, setError ] = useState(null);

    const validateEmail = async (data) => {
        const url = 'auth/registration/';
        // if email is not taken, it will call the nextpage function passed as a prop and move to the next page 
        //dispatch the email to redux state so it can be rendered on the next component
        try {
            const response = await Axios.post(url, data)
            if (response.status === 200) {
                console.log(response)
                localStorage.setItem('signup_email', data.email)
                props.nextpage()
            }
        } catch (error) {
            setError('This email is already registered')
        }
    }

    return (
        <LoginContainer>
            <TopContainer>
                <DontHaveAcc>Already have an account?</DontHaveAcc>
                <BaseButton onClick={() => props.history.push('/auth/login')} design={'small'}> SIGN IN </BaseButton>
            </TopContainer>
            <MidContainer>
                <LargeText>Sign Up</LargeText>
                <form onSubmit={handleSubmit(validateEmail)}>
                    {errors.email && <p>{errors.email.message}</p>}
                    <BaseInput type='email' placeholder='Email address' {...register('email', { required: 'Please enter your email address' })} />

                    {error ? <h3 style={{"color": "red"}}>{error}</h3> : null}
                    <BaseButton type='submit'>CONTINUE</BaseButton>
                </form>
            </MidContainer>
        </LoginContainer>
    )
}

export default withRouter(Registration)