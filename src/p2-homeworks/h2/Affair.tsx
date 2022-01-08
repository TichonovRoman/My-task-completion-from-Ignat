import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: Function
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    let priorityColorChange = () => {
        switch (props.affair.priority) {
            case "high":
                return <span className={s.redColor}>{props.affair.priority}</span>;
                break;
            case "middle":
                return <span className={s.yellowColor}>{props.affair.priority}</span>;
                break;
            case "low":
                return <span className={s.greenColor}>{props.affair.priority}</span>;
                break;
            default: return <span>{props.affair.priority}</span>


        }


    }

    return (
        <div>
            <div>
                <li className={s.heading2}>
                    {props.affair.name} {priorityColorChange()}
                    <button className={s.deleteButton} onClick={deleteCallback}>X</button>
                </li>
            </div>


        </div>
    )


}


export default Affair
