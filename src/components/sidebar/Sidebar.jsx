import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import message from '../../assets/message.png'
import add from '../../assets/add.png'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const Sidebar = () => {

   const [menuExtented, setMenuExtented] = useState(false);

   const { prevPrompts, setPrevPrompts,input,setInput, onSent } = useContext(AppContext);

   const handleChat = () => {
   localStorage.removeItem("SavedrecentPrompt");
   setPrevPrompts([]);
   window.location.reload();
}

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("SavedrecentPrompt"));
  if (Array.isArray(saved)) {
    const filtered = saved.filter(item => item && item.trim() !== "");
    setPrevPrompts(filtered);
  }
}, []);

   
  
   return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' onClick={()=>setMenuExtented(prev=>!prev)} src={assets.menu_icon} alt="" />
            <div onClick={handleChat} className="new">
                <img src={add} alt="" />
                {menuExtented?<span>New Chat</span>:null} 
            </div>
            {menuExtented?<h2>Recent</h2>:null}
            <div className="recent">
                
               {Array.isArray(prevPrompts) && prevPrompts.map((element, index) => (
  <div onClick={()=>onSent(element)} className='prev-msg' key={index}>
    <img src={message} alt="" />
    {menuExtented ? <p>{element}</p> : null}
  </div>
))}

{console.log(prevPrompts)}

            </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar