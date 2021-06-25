/* eslint-disable no-unused-vars */
import Posts from '../components/posts';
import UserProfilePage from '../components/profile/pages/profile page';
import Navigation from '../components/navigation/';
import { Switch, Route } from 'react-router-dom';
import { FindFriends } from '../components/findfriends';
import { LikedPosts } from '../components/posts/likedposts'
import { FriendPosts } from '../components/posts/friendposts'
import { FollowedPosts } from '../components/posts/Followedposts'
import SearchResults from '../components/posts/searchResults';
import EditProfilePage from "../components/profile/pages/edit profile page";

const UserApp = () => {
    return (
        <>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/profile" component={UserProfilePage} />
                <Route exact path="/editprofile" component={EditProfilePage} />
                <Route exact path="/findfriends" component={FindFriends} />
                <Route exact path='/search-results' component={ SearchResults } />
                <Route exact path={'/liked-posts'} component={ LikedPosts } />
                <Route exact path={'/friends-posts'} component={ FriendPosts } />
                <Route exact path={'/followed-posts'} component={ FollowedPosts } />
            </Switch>
        </>
    );
};

export default UserApp;
