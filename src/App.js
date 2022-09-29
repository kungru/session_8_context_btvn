import './App.css';
import {useState} from 'react';
import ContextLanguage from './context/ContextLanguage';
import Page from './Page/Page';
function App() {
  const [language,setLanguage]=useState( {
    logo:'MindX',
    login:'Login',
    t:'Sign in',
    placeholder:'Username ...',
    welcome: 'welcome',
    hello:'Welcome back',
  },
);
  const [display, setDisplay]=useState(true);
  const [user,setUser]=useState('');
  console.log(display);
  return (
      <ContextLanguage.Provider value={{language:language, setLanguage:setLanguage, display:display,setDisplay:setDisplay,user:user,setUser:setUser} }>
        <Page />
      </ContextLanguage.Provider>
      
   
  );
}

export default App;
