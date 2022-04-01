import React, {useState} from 'react';
import requestsAPI from "./api/RequestsAPI";
import {Button, Form} from "react-bootstrap";
import s from "./HW13.module.css"

export const Request = () => {


    const [isChecked, setIsChecked] = useState(false)
    const [result, setResult] = useState(``)

    const onChangeHandler = () => setIsChecked(!isChecked)


    const submit = () => {

        requestsAPI.post(isChecked)
            .then((response) => setResult(JSON.stringify(response)))
            .catch((error) => {
                    console.log({...error});
                    console.log(error.response ? error.response.data.errorText : error.message);
                    setResult(JSON.stringify(error))

                }
            )
    }


    return (
        <div>
            <div className={s.block}>
                
                <Button onClick={submit} variant="outline-primary">Submit</Button>
                <Form>
                    <Form.Check aria-label="option 1" checked={isChecked} onChange={onChangeHandler}/>
                </Form>
            </div>

            <div>
                <div>
                    <h3>Ответ сервера:</h3>
                </div>
                {result}
            </div>


        </div>
    );
};
