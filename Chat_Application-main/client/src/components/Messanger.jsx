import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const LoginHeader = styled(AppBar)
`
background-color: #746AB0;
height: 220px;
box-shadow: none;
`;
const Component = styled(Box)`
height: 100vh;
background: #DCDCDC;
`
const Header = styled(AppBar)`
    background-color: #504786;
    height: 125px;
    box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  
  return (
    <Component>
      {
        account ? <>
        <Header>
          <Toolbar>

          </Toolbar>
          </Header>
          <ChatDialog/>
        </>
        :
        <>
          <LoginHeader>
          <Toolbar>

          </Toolbar>
          </LoginHeader>
          <LoginDialog/>
        </>
      }
    
</Component>
  )
}

export default Messenger;

