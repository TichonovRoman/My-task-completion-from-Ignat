import React from 'react'
import s from "./Message.module.css"


type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


let Message: React.FC<MessageType> = (props) => {
    return (

        <div className={s.message}>
            <img className={s.avatar} alt={"user's avatar"} src={props.avatar}/>

            <div id={s.triangle}></div>
            <div className={s.contentBox}>
                <div className={s.personalContent}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                </div>

                <div className={s.time}>{props.time}</div>

            </div>

        </div>
    )
}


export default Message
