import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }



    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString()// fix with date
    const style = {
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
                    value={stringTime}
                    style = {{width: "220px", fontSize: "50px", marginLeft: "5px"}}
                />



            {show && (
                <div style = {{width: "220px", fontSize: "50px", marginLeft: "5px"}}>
                    {stringDate}
                </div>
            )}

            <SuperButton style={style} onClick={start}>start</SuperButton>
            <SuperButton style={style} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
