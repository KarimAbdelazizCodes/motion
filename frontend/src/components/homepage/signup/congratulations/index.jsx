/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BaseButton } from '../../../layouts/button/styled'
import { LoginContainer, MidContainer, BotContainer} from '../../login/styled'
import { LargeText } from '../../login'
import styled from 'styled-components'

const CongratsContainer = styled(MidContainer)`
    height: 70%;
`
const ConfirmationText = styled.p`
    text-align: center;
    padding: 5px;
`

export const Congratulations = (props) => {
    // renders user email below
    const email = localStorage.getItem('signup_email')

    return(
        <LoginContainer>
            <CongratsContainer>
                <LargeText>Congratulations!</LargeText>
                <ConfirmationText>We&apos;ve sent a confirmation code to your email</ConfirmationText>
                <ConfirmationText>{email}</ConfirmationText>
            </CongratsContainer>
            <BotContainer>
                <BaseButton onClick={props.nextpage} >CONTINUE</BaseButton>
            </BotContainer>
        </LoginContainer>
    )
}