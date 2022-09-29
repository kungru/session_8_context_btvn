import React, {useContext} from 'react'
import '../App.css';
import ContextLanguage from '../context/ContextLanguage';
const Footer = () => {
    const lan=useContext(ContextLanguage);
    const handleLanguage=(e)=>{
        if(e.target.value=='vi'){
            lan.setLanguage({
                logo:'MindX',
    login:'Đăng nhập',
    t:'Đăng nhập',
    placeholder:'Tên người dùng ...',
    welcome:'Chào mừng bạn',
    hello:'Xin chào'
            })
        } 
    }
  return (
    <footer>
        <select onChange={handleLanguage}>
          <option>eng</option>
          <option>vi</option>
        </select>
      </footer>
  )
}

export default Footer