import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("dummyUser");
  const [chats,setChats] = useState([
    {name:'user1',message:'message1'},
    {name:'dummyUser',message:'message2'}
  ]);

  const [msg,setMsg] = useState('');

  const sendChat= ()=>{
    const c =[...chats];
    c.push({name,message:msg});
    setChats(c);
  }
  return (
    <div > 
      <h1>User:{name}</h1>
      <div className='chat-container'>
         {chats.map(c=><div className={'container ${c.name===name? }'}>
            <p className='chatbox'>
            <strong>{c.name}</strong>
            <span>{c.message}</span>
            </p>
         </div>)}
        </div>
         
         <div className='btm'>
           <input type="text" onInput={e=>setMsg(e.target.value) }
           placeholder='enter your chat'/>
           <button onClick={e=>sendChat()}>Send</button>
         </div>
    </div>
  );
}

export default App;
