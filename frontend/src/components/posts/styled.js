import styled from 'styled-components';

export const PostsHome = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.profileBackground};

    .my-masonry-grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: -30px;
        width: auto;
    }

    .my-masonry-grid_column {
        padding-left: 30px;
        background-clip: padding-box;
    }

    .my-masonry-grid_column > div {
        background: ${props => props.theme.white};
        margin-bottom: 30px;
        width: 560px;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const NewPost = styled.div`
    width: 560px;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.white};
    padding: 20px;

    .newpost-right {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-avatar {
        width: 60px;
        height: 60px;
        border-radius: 25px;
        margin-right: 10px;
    }

    input {
        width: 340px;
        outline: none;
        border: none;
    }
`;

export const NewPostButton = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background: ${props => props.theme.linearGradient};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(0.8px);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const NewPostForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .uploadedimg {
        width: 120px;
        height: 120px;
        margin: 5px;
    }

    .subContainer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .profilepic {
            height: 50px;
            width: 50px;
            border-radius: 25px;
        }
    }

    .bottom {
        border-top: 1px gray solid;
        justify-content: space-between;
        align-items: center;
    }

    .textarea {
        resize: none;
        width: 400px;
        height: 150px;
        outline: none;
        border: none;
    }
`;
