import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: ${props => props.theme.profileBackground};
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

    #friendsDiv {
        width: 100%;
        max-width: 1182px;
        @media screen and (max-width: 1182px) {
            max-width: 788px;
        }
        @media screen and (max-width: 788px) {
            max-width: 394px;
        }
        margin-top: 25px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(394px, 394px));
        grid-template-rows: repeat(auto-fill, minmax(521px, 394px));

        #friendsTile {
            background-color: ${props => props.theme.white};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 489px;
            width: 362px;
            margin: 16px;
            #profilePicture {
                margin-top: 30px;
                width: 80px;
                height: 80px;
                border-radius: 45px;
            }
            #name {
                margin-top: 17px;
                font-size: ${props => props.theme.postsMedium};
                font-weight: ${props => props.theme.mediumWeight};
            }
            #origin {
                margin-top: 7px;
                font-size: ${props => props.theme.small};
                font-weight: ${props => props.theme.mediumWeight};
            }
            #butttonDiv {
                width: 100%;
                margin: 0;
                margin-top: 29px;
                height: fit-content;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            #followingButton {
                background-image: ${props => props.theme.linearGradient};
                color: ${props => props.theme.white};
            }
            #friendRequestedIcon {
                fill: ${props => props.theme.darkGray};
            }
            #friendIcon {
                fill: ${props => props.theme.darkGray};
            }
            #statusIcon {
                height: 14px;
                margin-right: 11px;
                fill: ${props => props.theme.darkGray};
            }

            button {
                font-size: ${props => props.theme.smallest};
                background: none;
                border: 1px solid ${props => props.theme.lightGray};
                width: 130px;
                height: 40px;
                border-radius: 30px;
                margin-left: 3px;
                margin-right: 3px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #aboutMe {
                font-size: ${props => props.theme.small};
                font-weight: ${props => props.theme.mediumWeight};
                line-height: 24px;
                margin-top: 30px;
                height: 72px;
                width: 282px;
                overflow: hidden;
                word-wrap: break-word;
            }
            #hobbiesDiv {
                display: flex;
                flex-flow: row wrap;

                margin-top: 30px;
                height: 76px;
                width: 253px;
                overflow: hidden;
            }
            #hobby {
                background-color: ${props => props.theme.profileBackground};
                padding: 9px 17px 7px 16px;
                border-radius: 18px;
                width: fit-content;
                height: fit-content;
                margin: 0px 4px 12px 4px;
                font-size: ${props => props.theme.small};
                font-weight: ${props => props.theme.mediumWeight};
            }
        }
    }
`;
