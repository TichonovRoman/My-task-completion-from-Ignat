import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {Form} from 'react-bootstrap';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((i, a) => <option key={a}>{i}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        let value = e.currentTarget.value
        let index = options ? options.indexOf(value) : 0
        if (onChangeOption) {
            onChangeOption(options ? options[index] : null)
        }
        // onChange, onChangeOption
    }

    return (
        <Form.Select
            onChange={onChangeCallback}
            value={restProps.value}
            style={{width: "150px", marginBottom: "30px"}}
            aria-label="Default select example">
            {mappedOptions}
        </Form.Select>

        // <select onChange={onChangeCallback} value={restProps.value} {...restProps}>
        //     {mappedOptions}
        // </select>
    )
}

export default SuperSelect
