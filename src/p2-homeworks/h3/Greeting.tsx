import React, {useState} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback:  (e: React.FormEvent<HTMLInputElement>) => void // need to fix any
    addUser: Function// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, totalUsers} // деструктуризация пропсов
) => {
    const [error, setError] = useState<boolean>(false) // need to fix any
    let OnKik = () => {
        addUser()
        setError(true)
        name != '' && setError(false)
    }

    const inputClass = error ? s.error : `` // need to fix with (?:)
    let errorMessage = "Enter the name again"

    return (
        <div>
            <div className={s.box}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span>{error}</span>
                <button onClick={OnKik} className={s.button}>add</button>
                <span>{totalUsers}</span>

            </div>
            { error ? <div className={s.errorMessage}>{errorMessage}</div> : ''}
        </div>

    )
}

export default Greeting
