import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { readMessage, updateMessage } from "./redux/messageSlice";

export const MessageComponent = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = setInterval(()=>dispatch(readMessage()),500);
        return () => clearInterval(interval)
    }, [])
    
    const onSendButtonClicked = () => {
        if(message !== '')
            dispatch(updateMessage(message));
        
        setMessage('');
    }

    return (
        <div style={{display:"flex",width:'100%',alignItems:'center',flexDirection:'column'}}>
            <textarea value={message} onChange={(e)=>setMessage(e.currentTarget.value)}>

            </textarea>
            <button onClick={onSendButtonClicked}>Send</button>
            
            <div style={{marginTop:'10px', width: '50%', borderTop:'1px solid #eee'}}>
                <ShowMessages/>
            </div>
        </div>)
}

function ShowMessages() {
    const messagesList = useSelector(state => state.messagesReducer.messages);
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', height:'200px', overflowY:'auto'}}>
            {messagesList.map((message,index) => <div key={index} style={{margin:'2px', padding:'5px', backgroundColor:'#e6fffa', border:'1px solid #0099cc', borderRadius:'9px'}}>{message }</div>)}
        </div>
    )
}