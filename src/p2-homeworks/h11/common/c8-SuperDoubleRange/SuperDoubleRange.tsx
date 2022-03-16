import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number) => void
    value1: number,
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value1,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    return (
        <>
            <input type={"range"}
                   value={value1}
                   onChange={(e) => onChangeRange(+e.currentTarget.value)}
            />
        </>
    )
}

export default SuperDoubleRange
