import React, {useContext} from 'react'
import '../App.css';
import ContextLanguage from '../context/ContextLanguage';

const Header = () => {
    const lan=useContext(ContextLanguage);
    console.log(lan.display);
  return (
    <header>
    <h2>{lan.language.logo}</h2>
    {lan.display ? <p>{lan.language.login}</p> : <p>{lan.language.welcome}, {lan.user}</p>}
    </header>
  )
}

export default Header