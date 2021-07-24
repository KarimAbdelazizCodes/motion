import styled from 'styled-components'

export const BaseInput = styled.input`
    width: 340px;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
    background-position: left;
    background-repeat: no-repeat;
    
    ::placeholder {
        color: black;
    }
`