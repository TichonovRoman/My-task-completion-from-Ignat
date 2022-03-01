import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const [clearTime, setClearTime] = useState(false)


    const stop = () => {
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        setClearTime(false)
    }
    const clear = () => {
        setClearTime(true)
    }
    const clearRun = () => {
        setClearTime(false)
    }


    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString()// fix with date
    const buttonStyle = {
        display: "inline-block",
        marginLeft: "5px",
        width: "107px"
    }

    return (
        <div>

            <input
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="form-control"
                type="text"
                placeholder="Readonly input here…"
                readOnly
                value={clearTime ? "00:00:00" : stringTime}
                style={{width: "445px", textAlign: "center", fontSize: "50px", marginLeft: "5px"}}
            />


            <input
                readOnly
                style={{width: "445px", fontSize: "50px", marginLeft: "5px", textAlign: "center", border: "none"}}
                value={show ? stringDate : ""}
            >

            </input>

            <div>
                <SuperButton style={buttonStyle} onClick={start}>start</SuperButton>
                <SuperButton style={buttonStyle} onClick={stop}>stop</SuperButton>
                <SuperButton style={buttonStyle} onClick={clear}>clear</SuperButton>
                <SuperButton style={buttonStyle} onClick={clearRun}>return</SuperButton>
            </div>


        </div>
    )
}

export default Clock
