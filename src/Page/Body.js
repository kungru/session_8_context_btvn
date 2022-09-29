import React, {useContext} from 'react'
import '../App.css';
import ContextLanguage from '../context/ContextLanguage';

const Body = () => {
    const lan=useContext(ContextLanguage);
    const signIn=()=>{
      lan.setDisplay(false);
    }
  return (

    <main style={{border: '1px solid black'}}>
      
       {lan.display ==true ? <div className='form_container'>
        <h4>{lan.language.t}</h4>
        <div className="username_input">
          <input placeholder={lan.language.placeholder} value={lan.user} onChange={(e)=>{lan.setUser(e.target.value)}}></input>
        <button onClick={signIn}>{lan.language.t}</button>
        </div>
        </div> : <div className='form_container'><span>{lan.language.hello}</span></div> }
      </main>
  )
}

export default Body