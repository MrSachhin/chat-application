import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import styled from '@emotion/styled'
import Profile from './Profile'

 const Header =styled(Box)`
 background: #746AB0;
 height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
 `
 const Component = styled(Box)`
 background: #ededed;
 height: 85%;
`;
const drawerStyle = {
    left: 20,
    top: 18,
    height: '95%',
    width: '30.2%',
    boxShadow: 'none'
}
const Text = styled(Typography)`
    font-size: 18px;
`


const InfoDrawer = ({open,setOpen}) => {

    const handleClose = () =>{
        setOpen(false);
    }

  return (
    <div>
      <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
           <Header>
            <ArrowBack onClick ={()=>setOpen(false)} />
            <Text>Profile</Text>
           </Header>
           <Component>
            <Profile/>
           </Component>
        </Drawer>
    </div>
  )
}

export default InfoDrawer
