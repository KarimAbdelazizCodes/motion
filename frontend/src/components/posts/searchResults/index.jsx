import Post from '../../../components/posts/postcontainer'
import { useSelector } from 'react-redux'
import Masonry from 'react-masonry-css'
import { Wrapper } from './styled'
import SearchBar from '../searchbar'

const SearchResults = () => {
    const results = useSelector(state => state.searchResult)
    return (
        <Wrapper>
            <SearchBar />
            <div className='grid'>
                <Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {results.length > 0 ? results.map((post, index) => (
                        <Post key={post.id} post={post}/>
                    )) : <h1>No results matching your search were found...sorry :(</h1>}
                </Masonry>
            </div>
        </Wrapper>
    )
}

export default SearchResults