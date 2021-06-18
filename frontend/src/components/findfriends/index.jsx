/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../Axios';
import { useEffect } from 'react';
import { getFriendsRequests, getUsers } from '../../Axios/fetches';

export const FindFriends = () => {
    const userList = useSelector(state => state.userList);
    const token = localStorage.token;
    const dispatch = useDispatch();

    const defaultAvatar = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';

    useEffect(() => {
        dispatch(getUsers);
    }, []);

    const followUser = async (user, index) => {
        const url = `social/followers/toggle-follow/${user.id}/`;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const response = await Axios.post(url, null, config);

        let newUserList = [...userList];
        newUserList[index].logged_in_user_is_following = !newUserList[index].logged_in_user_is_following;

        const action = {
            type: 'GET_USERS',
            payload: newUserList,
        };

        dispatch(action);
    };

    const addToFriends = async (user, index) => {
        if (!user.logged_in_user_is_friends && !user.logged_in_user_sent_fr) {
            const url = `/social/friends/request/${user.id}/`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const response = await Axios.post(url, null, config);

            let newUserList = [...userList];
            newUserList[index].logged_in_user_sent_fr = !newUserList[index].logged_in_user_sent_fr;

            const action = {
                type: 'GET_USERS',
                payload: newUserList,
            };

            dispatch(action);

            dispatch(getFriendsRequests);
        } else {
            return null;
        }
    };

    return (
        <Container>
            <div id="friendsDiv">
                {userList
                    ? userList.map((user, index) =>
                          user.first_name ? (
                              <div id="friendsTile" index={index} key={user.id}>
                                  <img id="profilePicture" src={user.avatar ? user.avatar : defaultAvatar} />
                                  <h2 id="name">
                                      {user.first_name ? user.first_name : 'Unknown'} {user.last_name ? user.last_name : 'User'}
                                  </h2>
                                  <span id="origin">{user.location}</span>
                                  <div id="butttonDiv">
                                      {user.logged_in_user_is_following || userList[index].logged_in_user_is_following ? (
                                          <button id="followingButton" onClick={() => followUser(user, index)}>
                                              FOLLOWING
                                          </button>
                                      ) : (
                                          <button id="followButton" onClick={() => followUser(user, index)}>
                                              FOLLOW
                                          </button>
                                      )}
                                      {user.logged_in_user_is_friends ? (
                                          <button id="addFriendButton" onClick={() => addToFriends(user, index)}>
                                              <svg id="statusIcon" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path id="friendIcon" fill-rule="evenodd" clip-rule="evenodd" d="M7.1252 11.2L2.4002 6.99998L0.825195 8.39998L7.1252 14L20.6252 1.99998L19.0502 0.599976L7.1252 11.2Z" fill="black" />
                                              </svg>
                                              FRIEND
                                          </button>
                                      ) : null}
                                      {user.logged_in_user_sent_fr || userList[index].logged_in_user_sent_fr ? (
                                          <button id="addFriendButton" onClick={() => addToFriends(user, index)}>
                                              <svg id="statusIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path id="friendRequestedIcon" fill-rule="evenodd" clip-rule="evenodd" d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9 5H10.5V10.25L15 12.92L14.25 14.15L9 11V5Z" fill="black" />
                                              </svg>
                                              REQUESTED
                                          </button>
                                      ) : null}
                                      {!user.logged_in_user_is_friends && !user.logged_in_user_sent_fr && !userList[index].logged_in_user_sent_fr ? (
                                          <button id="addFriendButton" onClick={() => addToFriends(user, index)}>
                                              ADD FRIEND
                                          </button>
                                      ) : null}
                                  </div>
                                  <p id="aboutMe">{user.about_me}</p>
                                  <div id="hobbiesDiv">
                                      {user.things_user_likes.map((hobby, index) => (
                                          <span id="hobby" key={index}>
                                              {hobby}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          ) : null
                      )
                    : null}
            </div>
        </Container>
    );
};
