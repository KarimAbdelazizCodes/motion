import styled from 'styled-components';

export const EditContainer = styled.div`
    display: flex;
    position: relative;
    top: 120px;
    height: 500px;
    width: 1152px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: white;
    border-radius: 4px;

    .standardButton {
        border-radius: 30px;
        background: none;
        border: 1px solid ${props => props.theme.lightGray};

        font-size: ${props => props.theme.smaller};
        font-weight: ${props => props.theme.mediumWeight};
        margin-top: 40px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-side {
        display: flex;
        width: 27.7%;
        height: 100%;
        border-right: 2px solid ${props => props.theme.lightGray};
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        .edit-avatar {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 60px;

            img {
                width: 80px;
                height: 80px;
                border-radius: 50px;
            }
        }

        #updateImageButton {
        }

        .save-delete {
            display: flex;
            flex-direction: column;
        }
    }

    .right-side {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-content: space-around;
        margin: 20px;

        .edit-info {
            display: flex;
            justify-content: space-between;
        }
        .edit-info > input {
            width: 100%;
            margin: 10px;
            height: 50px;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }

        .my-hobbies {
            display: flex;
            flex-direction: column;

            span {
                font-size: ${props => props.theme.small};
            }
            .hobbies {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;

                .hobby {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${props => props.theme.profileBackground};
                    border-radius: 25px;
                    margin: 10px;
                    padding: 5px;
                }
            }
        }
    }
`;

export const UpdateImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.boxShadow};
`;
