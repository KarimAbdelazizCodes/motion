import { SearchContainer } from './styled'
import Axios from '../../../Axios'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SearchBar = props => {
    const [searchText, setSearchtext] = useState('')
    const dispatch = useDispatch();
    
    const FindPost = async (text) => {
        const url = `social/posts/?search=${text}`;
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        };

        try {
            const response = await Axios.get(url, config);
            console.log(response);
            const action = {
                type: 'SEARCH_RESULTS',
                payload: response.data
            }
            dispatch(action)
            props.history.push('/search-results')
        } catch (e){
            console.log(e)
        }

    }

    return (
        <SearchContainer>
            <div>
                <input className='searchbar' type='text' placeholder='Search posts...' onChange={(e) => setSearchtext(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' ? FindPost(searchText) : null} value={searchText} />
            </div>
            <div>
                <Link className='nav' to='/liked-posts'>Liked</Link>
                <Link className='nav' to='/friends-posts'>Friends</Link>
                <Link className='nav' to='/followed-posts'>Followed</Link>
            </div>
        </SearchContainer>
    )
}

export default withRouter(SearchBar)