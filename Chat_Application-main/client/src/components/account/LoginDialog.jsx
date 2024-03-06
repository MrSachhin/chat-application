import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import jwt_decode from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext)

    const onLoginSuccess = async(res) =>{
        const decode = jwt_decode(res.credential);
        setAccount(decode);
        await addUser(decode);
    }
    const onLoginFailure = (res) =>{
        console.log('login failed',res); 
    }

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Component>
                <Container>
                    <Title>To use Gchat on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open Gchat on your Browser</ListItem>
                        <ListItem>2. Tap on the google icon</ListItem>
                        <ListItem>3. Login and use Gchat</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                <QRCOde src={qrCodeImage} alt="qrcode" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                        <GoogleLogin
                             onSuccess={onLoginSuccess}
                             onError={onLoginFailure}/>;
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;