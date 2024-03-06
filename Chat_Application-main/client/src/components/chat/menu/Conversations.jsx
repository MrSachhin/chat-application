import React, { useContext } from 'react'
import styled from '@emotion/styled';
import { useEffect,useState } from 'react';
import { getUsers } from '../../../service/api';
import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';


const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


const Conversations = ({text}) => {

    const [users, setUsers] = useState([]);

    const {account,socket,setActiveUser} = useContext(AccountContext);



    useEffect(() => {
      const fetchData = async () => {
          let response = await getUsers();
          let fiteredata = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(fiteredata);
      }
      fetchData();
  },[text]);


  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
      setActiveUser(users);
    })
}, [account])

  return (
    <Component>
      {
        users.map(user =>(
          user.sub !== account.sub&&
          <>
          <Conversation user = {user}/>
          <StyledDivider/>
          
          </>
        ))
      }
    </Component>
  )
}

export default Conversations

