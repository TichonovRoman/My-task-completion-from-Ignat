import React, {useState} from 'react';
import requestsAPI from "./api/RequestsAPI";
import {Button, Form} from "react-bootstrap";
import s from "./HW13.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {checkedAC, HW13initStateType, setResponseAC, ToggleIsDisabledButtonAC} from "./bll/hw13Reducer";

export const Request = () => {

    const {response, isDisabled, isChecked} = useSelector<AppStoreType, HW13initStateType>(store => store.hw13Reducer)

    const dispatch = useDispatch()

    const onChangeHandler = () => dispatch(checkedAC())


    const submit = () => {
        dispatch(ToggleIsDisabledButtonAC(true))

        requestsAPI.post(isChecked)
            .then((response) => {
                dispatch(setResponseAC(JSON.stringify(response)))
                dispatch(ToggleIsDisabledButtonAC(false))

            })


            .catch((error) => {

                    console.log({...error});
                    console.log(error.response ? error.response.data.errorText : error.message);
                    dispatch(setResponseAC(JSON.stringify(error)))
                    dispatch(ToggleIsDisabledButtonAC(false))
                }
            )
    }


    return (
        <div>
            <div className={s.block}>

                <Button disabled={isDisabled} onClick={submit} variant="outline-primary">Submit</Button>
                <Form>
                    <Form.Check aria-label="option 1" checked={isChecked} onChange={onChangeHandler}/>
                </Form>
            </div>

            <div>
                <div>
                    <h3>Ответ сервера:</h3>
                </div>
                {response}
            </div>


        </div>
    );
};
