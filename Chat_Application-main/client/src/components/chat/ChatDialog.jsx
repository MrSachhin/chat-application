import { Dialog ,Box} from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat';
import styled from '@emotion/styled';
import ChatBox from './chat/ChatBox';
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle = {
  height: '95%',
  width: '100%',
  margin: '20px',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: 0,
  boxShadow: 'none',
  overflow: 'hidden'
};

const Component = styled(Box)`
display:flex;
`;

const LeftComponent = styled(Box)`
min-width:450px;
`;

const RIghtComponent = styled(Box)
`
widt:73px;
min-width:300px;
height: 100%;
border-left: 1px solid rgba(0,0,0,0.14);
`


const ChatDialog = () => {

  const {person} = useContext(AccountContext);

  return (
   <Dialog 
   open = {true}
   PaperProps={{sx:dialogStyle}}
   hideBackdrop = {true}
   >
    <Component>
      <LeftComponent>
        <Menu/>
      </LeftComponent>

    
      <RIghtComponent>
       {Object.keys(person).length ? <ChatBox/>:<EmptyChat/>}
      </RIghtComponent>
    </Component>

   </Dialog>
  )
}

export default ChatDialog
