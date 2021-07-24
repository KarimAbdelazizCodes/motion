/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Main } from '../components/homepage/main';
import { Login } from '../components/homepage/login'
import { SignUp } from '../components/homepage/signup';
import { Switch, Route } from 'react-router-dom'


// styling for main div on Homepage
const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

const Authentification = props => {
  
    return (    
        <HomeContainer>
            <Main />
            <Switch>
                <Route path='/auth/login' component={ Login } />
                <Route path='/auth/signup' component={ SignUp } />
            </Switch>  
        </HomeContainer>
    );
};

export default Authentification;
