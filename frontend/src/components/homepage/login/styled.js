import styled from 'styled-components'
import avatar from '../../../assets/avatar.svg'
import password from '../../../assets/password.svg'
import { BaseInput } from '../../layouts/input/styled'

// main container
export const LoginContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:  ${props => props.theme.white};
`

// Top section
export const TopContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    width: 100%;
    margin-right: 40px;
`

export const DontHaveAcc = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-right: 20px;
`

// Middle section
export const MidContainer = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: ${props => props.theme.smaller};
            color: red;
        }

        button {
            margin-top: 150px;
        }
    }
`

export const BotContainer = styled(MidContainer)`
    height: 30%;
    justify-content: flex-start;
`

export const LoginInput = styled(BaseInput)`
    background-image: url(${props => props.type === 'email' ? avatar : password});
    padding-left: 30px;
`