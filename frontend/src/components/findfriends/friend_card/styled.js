import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  
  .upper, .middle {
    display: flex;
    align-items: center;
  }
  
  .upper {
    flex-direction: column;
    
    .name {
      font-weight: 800;
      font-size: 20px;
      padding-bottom: 5px;
    }
    
    .location {
      font-size: 14px;
    }
    
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-bottom: 20px;
  }
`
export const BaseButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  margin: 5px;
  font-size: ${props => props.theme.small};
  box-shadow: 0 10px 30px 0 #00000012;
  border: 1px solid gray;
`

export const FriendButton = styled(BaseButton)`
  background: ${props => props.theme.whiteTransparent};

`

export const FollowButton = styled(BaseButton)`
  background: ${props => props.status ? props.theme.linearGradient : props.theme.whiteTransparent};
  border: ${props => props.status ?? 'none'};
  color: ${props => props.status ? 'white': 'black'};
`