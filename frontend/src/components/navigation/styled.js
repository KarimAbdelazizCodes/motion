import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.white};
    height: 60px;
    button {
        cursor: pointer;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
        height: 26px;
        width: 26px;
        object-fit: none;
        object-position: 0% 50%;
        margin-left: 40px;
        margin-right: 12px;
    }
    button {
        background: none;
        border: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
        height: 100%;
        margin-right: 73px;
        img {
            filter: opacity(20%);
            margin: 0px;
        }
    }

    h1 {
        font-size: ${props => props.theme.postsMedium};
        font-weight: ${props => props.theme.mediumWeight};
        margin-right: 113px;
    }
    p {
        font-size: ${props => props.theme.medium};
        font-weight: ${props => props.theme.mediumWeight};
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: center;

    #userAvatar {
        height: 40px;
        width: 40px;
        border-radius: 24px;
        align-self: center;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    #notificationButton {
        background: none;
        border: none;
        margin-right: 40px;
        height: 100%;
        width: fit-content;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        #notificationBell {
            filter: opacity(20%);
        }
        #notificationCircle {
            height: 21px;
            width: 21px;
            margin-bottom: 18px;
            position: relative;
            align-self: center;
            display: flex;
            align-content: center;
            justify-content: center;
            span {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                color: ${props => props.theme.white};
                font-size: ${props => props.theme.smaller};
                z-index: 1;
            }
            img {
                position: absolute;
                z-index: 0;
            }
        }
    }
    #menuButton {
        background: none;
        border: none;
        margin-left: 21px;
        margin-right: 45px;
        height: 100%;
        width: 14px;
    }
`;

export const UserModal = styled.div`
    position: absolute;
    margin-top: 70px;
    margin-right: 40px;
    height: 96px;
    width: 180px;
    background-color: ${props => props.theme.white};
    border-radius: 4px;
    z-index: 1;
    button {
        background: none;
        border: none;
        display: flex;
        flex-direction: row;
        align-content: center;
        height: 40px;
        width: 100%;

        img {
            height: 18px;
            filter: opacity(20%);
            margin-left: 23px;
            margin-right: 23px;
            align-self: center;
        }
        span {
            align-self: center;
        }
    }
    button:hover {
        background: ${props => props.theme.lightGray};
        transition: all 0.2s linear;
    }
`;

export const FriendsModal = styled.div`
    position: absolute;
    margin-top: 70px;
    margin-right: 145px;
    height: 468px;
    width: 362px;
    background-color: ${props => props.theme.white};
    border-radius: 4px;
    z-index: 1;
    overflow: scroll;

    #friendsModalContent {
        display: flex;
        flex-direction: column;

        margin-left: 31px;
        #reqTitle {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        #sentFriendReq,
        #receivedFriendReq {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            margin-bottom: 20px;
            height: 40px;
            width: 100%;
            #profileIcon {
                width: 40px;
                height: 40px;
                margin-right: 16px;
            }
            #description {
                display: flex;
                flex-direction: column;
                width: 100%;
                overflow: hidden;
            }
            #darkGaryColor {
                fill: ${props => props.theme.darkGray};
            }
            #buttonDiv {
                display: flex;
                justify-content: flex-end;
                margin-right: 29px;
                width: fit-content;

                #acceptButton {
                    background-image: ${props => props.theme.linearGradient};
                }

                #rejectButton {
                    margin-left: 8px;
                }

                button {
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 30px;
                    background: ${props => props.theme.lightGray};
                }
            }
        }

        span {
            font-weight: ${props => props.theme.mediumWeight};
        }
    }
`;
