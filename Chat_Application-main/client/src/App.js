import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messanger from './components/Messanger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '840225353264-mjormvc50ucl4sqv78sa38j2vbhvmk8r.apps.googleusercontent.com'
  return (
    <>
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
