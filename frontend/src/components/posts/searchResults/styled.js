import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.profileBackground};

    .grid {
        display: flex;
        justify-content: center;

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
    }
`