import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Table} from "react-bootstrap";

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => {
        return (
            <tr>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
            </tr>
        )
    })

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp'}))
    const sortDown = () => {
    }
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "check"}))
    const style = {
        display: "inline-block",
        marginLeft: "5px"
    }


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            <Table striped bordered hover size="sm" responsive style={{margin: "12px", width: "300px"}}>
                <thead>
                <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {finalPeople}
                </tbody>
            </Table>

            <div style={style}><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div style={style}><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div style={style}><SuperButton onClick={check}>check 18</SuperButton></div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
