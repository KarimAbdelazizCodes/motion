import Post from '../postcontainer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { Wrapper } from '../searchResults/styled'
import { fetchFriendPosts } from '../../../Axios/fetches'
import SearchBar from '../searchbar'

export const FriendPosts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFriendPosts)
    }, [dispatch])

    const friends = useSelector(state => state.friendPosts)

    return (
        <Wrapper>
            <SearchBar />
            <div className='grid'>
                <Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {friends ? friends.map((post, index) => (
                        <Post key={post.id} post={post}/>
                    )) : <h1>You have no friends...yet! :(</h1>}
                </Masonry>
            </div>
        </Wrapper>
    )
}

export default FriendPosts