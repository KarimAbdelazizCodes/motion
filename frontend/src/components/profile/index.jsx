import { MainContainer } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Post from '../posts/postcontainer';
import EditProfile from './editprofile';
import { fetchUserdata } from '../../Axios/fetches';
import testbanner from '../../assets/testbanner.jpg';

const UserProfile = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userData);
    const userPosts = useSelector(state => state.userPosts);
    const [toggleEdit, setToggleEdit] = useState(false);

    useEffect(() => {
        dispatch(fetchUserdata);
    }, [dispatch]);

    return (
        <MainContainer>
            <img className="banner" src={userInfo.banner ? userInfo.banner : testbanner} alt="banner" />
            {toggleEdit ? (
                <EditProfile data={userInfo} />
            ) : (
                <div className="overlap">
                    <div className="about-me">
                        <div className="about-left">
                            <img src={userInfo.avatar} alt="profile" />
                            <span className="name">{`${userInfo['first_name']} ${userInfo['last_name']}`}</span>
                            <span className="subtext" id="smallSize">
                                {userInfo.location}
                            </span>
                            <button onClick={() => setToggleEdit(!toggleEdit)}>EDIT PROFILE</button>
                        </div>
                        <div className="about-right">
                            <div className="hobbies">
                                <div className="left-side">
                                    <span id="smallSize">About</span>
                                    <p className="user-info">{userInfo['about_me']}</p>
                                    <div className="container">
                                        <div className="subContainer" id="left">
                                            <span id="smallSize">Email</span>
                                            <span>{userInfo.email}</span>
                                        </div>
                                        <div className="subContainer" id="right">
                                            <span id="smallSize">Job</span>
                                            <span>{userInfo.job}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <span id="smallSize">Things I like</span>
                                    <div id="hobbiesDiv" className="thingsIlike">
                                        {userInfo['things_user_likes'] ? userInfo['things_user_likes'].map((hobby, index) => <span id="hobby">{hobby}</span>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="counters">
                                <div>
                                    <button>
                                        <span id="amount">{userInfo['amount_of_posts']}</span>
                                        <span id="text">Posts</span>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <span id="amount">{userInfo['amount_of_likes']}</span>
                                        <span id="text">Likes</span>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <span id="amount">{userInfo['amount_of_friends']}</span>
                                        <span id="text">Friends</span>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <span id="amount">{userInfo['amount_of_followers']}</span>
                                        <span id="text">Followers</span>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <span id="amount">{userInfo['amount_following']}</span>
                                        <span id="text">Following</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-posts">
                        <Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                            {userPosts.map((post, index) =>
                                <Post key={post.id} post={post}/>)}
                        </Masonry>
                    </div>
                </div>
            )}
        </MainContainer>
    );
};

export default UserProfile;
