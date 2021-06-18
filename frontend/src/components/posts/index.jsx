/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { PostsHome, NewPost, NewPostButton, ButtonContainer, NewPostForm, PostContainer } from './styled';
import Popup from './popups/newpost';
import { useRef, useState, useEffect } from 'react';
import Axios from './../../Axios';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import Post from './postcontainer';
import send from '../../assets/posts/send.svg';
import { fetchPosts, fetchUserdata } from '../../Axios/fetches';
import SearchBar from '../posts/searchbar'

const Posts = () => {
    const [popup, setPopup] = useState(false);
    const [images, setImages] = useState([]);
    const imageRef = useRef();
    const newPostRef = useRef();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const userData = useSelector(state => state.userData);

    // fetches posts upon rendering
    useEffect(() => {
        dispatch(fetchUserdata);
        dispatch(fetchPosts);
    },[]);

    // saves uploaded images to the local state, so they can be rendered in the new post window
    const saveImages = () => {
        let imgArr = Array.from(imageRef.current.files);
        imgArr.forEach(file => {
            setImages(images => [...images, file]);
        });
    };

    // create Form Data, fetch data through Thunk, post ID is saved in Redux store - connect to function on line 64
    const submitNewPost = async dispatch => {
        const url = 'social/posts/';
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };

        let newForm = new FormData();
        images.map(image => newForm.append('images', image));
        newForm.append('content', newPostRef.current.value);

        try {
            const response = await Axios.post(url, newForm, config);
            console.log(response.data);
            const action = {
                type: 'NEW_POST',
                payload: response.data,
            };

            dispatch(action);
        } catch (e) {
            console.log(e);
        }
    };

    // dispatch the return of submitNewPost - empties images when the user closes the window without submitting a post
    const createPost = e => {
        e.preventDefault();
        dispatch(submitNewPost);
        setImages([]);
        setPopup(!popup);
    };

    return (
        <PostsHome>
            <SearchBar></SearchBar>
            <PostContainer>
                <Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    <NewPost>
                        <div className='newpost-right'>
                            <img className='user-avatar' src={userData.avatar} alt='profile pic' />
                            <p onClick={() => setPopup(!popup)}>{`What's on your mind, ${userData['first_name']}?`}</p>
                        </div>
                        <ButtonContainer>
                            <NewPostButton>
                                <img src={send} />
                            </NewPostButton>
                        </ButtonContainer>

                        <Popup toggle={popup} close={setPopup} clear={setImages}>
                            <NewPostForm onSubmit={createPost}>
                                <div className="subContainer">
                                    <img className="profilepic" src={userData.avatar} alt="profile pic" />
                                    <textarea className="textarea" placeholder={`What's on your mind, ${userData['first_name']}?`} ref={newPostRef}></textarea>
                                </div>
                                <div id="subContainer">{images ? images.map((image, index) => <img className="uploadedimg" key={index} src={URL.createObjectURL(image)} alt="attachment" />) : null}</div>
                                <div className="subContainer bottom">
                                    <input type="file" accept="image/png, image/jpeg" ref={imageRef} multiple onChange={saveImages} />
                                    <NewPostButton type="submit">
                                        <img src={send} />
                                    </NewPostButton>
                                </div>
                            </NewPostForm>
                        </Popup>
                    </NewPost>
                    {posts.map(post => (
                        <Post key={post.id} post={post}/>
                    ))}
                </Masonry>
            </PostContainer>
        </PostsHome>
    );
};

export default Posts;