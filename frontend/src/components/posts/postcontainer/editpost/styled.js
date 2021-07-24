import styled from 'styled-components'

export const EditWrapper = styled.div`
    position: absolute;
    background: white;
    right: 0px;
    top: 40px;
    display: flex;
    flex-direction: column;
    width: 150px;
    z-index: 1;
    box-shadow: ${props => props.theme.boxShadow};

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        :hover{
            background: ${props => props.theme.profileBackground};
        }

        button {
            width: 100px;
            outline: none;
            border: none;
            background: none;
        }
    }
`

export const EditingDiv = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
    width: 560px;
    height: 500px;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 999;
`