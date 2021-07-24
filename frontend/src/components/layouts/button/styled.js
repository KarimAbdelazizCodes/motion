import styled from 'styled-components'

export const BaseButton = styled.button`
    border-radius: 30px;
    width: ${props => props.design === 'small' ? "100px" : "280px"};
    height: ${props => props.design === 'small' ? "30px" : "60px"};
    background: ${props => props.design === 'small' ? 'transparent' : props.theme.linearGradient};
    border: ${props => props.design === 'small' ? "1px solid black" : "none"};
    color: ${props => props.design === 'small' ? props.theme.black : props.theme.white};
    font-size: ${props => props.design === 'small' ? props.theme.normal : props.theme.small};

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(0.5px);
    }
`