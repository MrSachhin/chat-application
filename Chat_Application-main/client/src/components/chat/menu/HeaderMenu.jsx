import { useState} from 'react';

import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import InfoDrawer from '../../drawer/InfoDrawer';


//components


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;


const HeaderMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const [open, setOpen] = useState(false);
    


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };
    const toggleDrawer = () =>{
        setOpenDrawer(true);
    }

   



    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose();toggleDrawer()}}>Profile</MenuOption>
                <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
            </Menu>
        </>
    )
}

export default HeaderMenu;