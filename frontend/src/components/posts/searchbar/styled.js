import styled from 'styled-components'
import search from '../../../assets/posts/search.svg'


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    margin: 0 144px 40px;

    .searchbar {
        background-image: url(${search});
        background-repeat: no-repeat;
        background-position: left;
        padding-left: 30px;
        background-color: transparent;
        border: none;
        outline: none;
    }

    .nav {
        margin: 0 10px;
        text-decoration: none;
        color: ${props => props.theme.black}
    }
`