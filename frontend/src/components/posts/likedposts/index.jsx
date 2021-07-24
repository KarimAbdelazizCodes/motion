import Post from '../../../components/posts/postcontainer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { Wrapper } from '../searchResults/styled'
import { fetchLikedPosts } from '../../../Axios/fetches'
import SearchBar from '../searchbar'

export const LikedPosts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLikedPosts)
    }, [dispatch])
    const likes = useSelector(state => state.likedPosts)

    return (
        <Wrapper>
            <SearchBar />
            <div className='grid'>
                <Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {likes.length > 0 ? likes.map((post, index) => (
                        <Post key={post.id} post={post}/>
                    )) : <h1>Go like some posts!</h1>}
                </Masonry>
            </div>
        </Wrapper>
    )
}

export default LikedPosts