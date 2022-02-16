import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {Form} from "react-bootstrap";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (o: string) => {

        let index = options ? options.indexOf(o) : 0

        if (onChangeOption) {onChangeOption(options ? options[index] : 1)}
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>

            <Form>
                <Form.Check
                    style ={{margin: "10px"}}
                    type="switch"
                    id="custom-switch"
                    label={o}
                    checked = {o == value}
                    onChange={(e) => onChangeCallback(o)}
                />
            </Form>
            {/*<input*/}
            {/*    type= {name}*/}
            {/*    checked = {o == value}*/}
            {/*    onChange={(e) => onChangeCallback(o)}*/}
            {/*    // name, checked, value, onChange*/}
            {/*/>*/}
            {/*{o}*/}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
