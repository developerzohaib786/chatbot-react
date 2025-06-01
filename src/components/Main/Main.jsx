import React from 'react'
import './style.css'
import user from '../../assets/user.png'
import {assets} from '../../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import Loader from './Loader'
import { marked } from 'marked'
import TypingResponse from './TypingResponse'

const Main = () => {

  const {  input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        response,
        setResponse,
        loading,
        setLoading,
        showResponse,
        setShowResponse,
        onSent, } = useContext(AppContext);


  return (
    <div className='main'>
      <div className="main-top">
        <div className="logo">AI ChatBOT</div>
        <div className="userImg"><img src={user} alt="user" /></div>
      </div>
    {!showResponse ? 
    <>
        <div className="main-greeting">
           <p>
             <span>
               Hello G!
             </span>
           </p>
           <p  className='greet'>How can I help you?</p> 
      </div>
      <div className="main-cardContainer">
        <div onClick={()=>onSent("Suggest Beautiful Places to visit on next road trip")}  className="card">
          <p className="card-text">Suggest Beautiful Places to visit on next road trip</p>
          <div className="card-icon">
            <img src={assets.compass_icon} alt="icon" />
          </div>
        </div>
        <div onClick={()=>onSent("Briefly summarize this concept urban planning")}  className="card">
          <p className="card-text">Briefly summarize this concept urban planning</p>
          <div className="card-icon">
            <img src={assets.bulb_icon} alt="icon" />
          </div>
        </div>
        <div onClick={()=>onSent("Brainstorm team bonding activities for our work retreat")} className="card">
          <p className="card-text">Brainstorm team bonding activities for our work retreat</p>
          <div className="card-icon">
            <img src={assets.message_icon} alt="icon" />
          </div>
        </div>
        <div onClick={()=>onSent("What is the meaning of life?")} className="card">
          <p className="card-text">What is the meaning of life?</p>
          <div className="card-icon">
            <img src={assets.code_icon} alt="icon" />
          </div>
        </div>
      </div></>:
      <div className='response'>
        <div className='user-question'>
          <div><img src={user} alt="icon" /></div>
          <div>{recentPrompt}</div>
        </div>
  {loading?<Loader/>:      <div className="chatbot-response">
          <img src={assets.gemini_icon} alt="" />
         <TypingResponse response={response}/>
        </div>}
        </div>
        }
      <div className="message-input">
        <div className="input">
          <input onChange={(e)=>setInput(e.target.value)} value={input} className='input-field' type="text" placeholder='Type your message here...' />
          <div className="input-icons">
            <img src={assets.plus_icon} alt="icon" />
            <img src={assets.mic_icon} alt="icon" />
            <img onClick={()=>onSent(input)} src={assets.send_icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Main





