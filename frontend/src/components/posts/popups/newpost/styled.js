import styled from 'styled-components'


export const OuterPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;

`

export const InnerPopup = styled.div`
    position: relative;
    left: 185px;
    top: 170px;
    padding: 30px;
    width: 100%;
    height: 100%;
    max-width: 560px;
    max-height: 410px;
    background: white;
    z-index: 2;
`
export const CloseButton = styled.button`
    border-radius: 30px;
    height: 25px;
    width: 25px;
    position: absolute;
    top: -25px;
    right: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    :hover {
        cursor: pointer;
    }
`