import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileData, getFriendsRequests } from '../../Axios/fetches';

import Logo from '../../assets/main/logo.png';
import PostImg from '../../assets/posts/posts_logo.svg';
import FriendsImg from '../../assets/navigationbar/friends.svg';
import BellIcon from '../../assets/navigationbar/notificationbell.svg';
import MenuIcon from '../../assets/navigationbar/dots.svg';
import { NakedButton } from '../../styles/Button';
import Avatar from '../../styles/Avatar';
import NotificationDropdown from "../layouts/notification";


const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    box-shadow: -2px 0px 24px 4px rgba(0,0,0,0.12);

    position: relative;
    z-index: 10;

    padding: 0 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`


const SubContainer = styled.div`
    margin-right: ${props => props.marginRight || "4%"};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`


const Title = styled.h2`
    font-size: ${props => props.theme.postsMedium};
    color: black;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(2px);
    }
`


const ImgLogo = styled.img`
    width: 24px;
    height: 24px;

    margin-right: 15px;
`


const ImgPost = styled.img`
    width: 17px;

    margin-right: 15px;
`


const ImgFriends = styled.img`
    width: 20px;

    margin-right: 15px;
`


const ImgBell = styled.img`
    width: 20px;

    margin-left: auto;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(2px);
    }
`


const ImgMenu = styled.img`
    width: 5px;

    margin-left: 1.5%;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(2px);
    }
`


const NavBar = () => {
    const myProfileData = useSelector(state => state.userData);
    const [toggleNotification, setToggleNotification] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriendsRequests)
        if (myProfileData.length === 0) {
            dispatch(fetchUserProfileData)
        }
    }, [dispatch, myProfileData]);


    return (
        <Container>
            <SubContainer marginRight="8%">
                <ImgLogo src={Logo} alt=' logo'/>
                <Title>Motion</Title>
            </SubContainer>

            <SubContainer>
                <ImgPost src={PostImg} alt='post logo'/>
                <NakedButton onClick={() => location.pathname !== "/" ? history.push("/") : null}>Posts</NakedButton>
            </SubContainer>

            <SubContainer>
                <ImgFriends src={FriendsImg} alt='friend logo'/>
                <NakedButton onClick={() => location.pathname !== "/findfriends" ? history.push("/findfriends") : null}>Find Friends</NakedButton>
            </SubContainer>

            <ImgBell src={BellIcon} alt='bell logo' onClick={() => setToggleNotification(!toggleNotification)}/>
            {
                toggleNotification ? (
                    <NotificationDropdown />
                ) : null
            }
            <Avatar user={myProfileData.avatar} user_id={"profile"}/>
            <ImgMenu src={MenuIcon} alt='menu logo'/>
        </Container>
    )
}

export default NavBar