const initState = {
    response: "",
    isDisabled: false,
    isChecked: false,

};

export type HW13initStateType = {
    response: string,
    isDisabled: boolean,
    isChecked: boolean,
}

type ActionType = ReturnType<typeof setResponseAC>
| ReturnType<typeof ToggleIsDisabledButtonAC>
| ReturnType<typeof checkedAC>

export const hw13Reducer = (state = initState, action: ActionType): HW13initStateType => { // fix any
    switch (action.type) {
        case "SET-RESPONSE":
        case "TOGGLE-DISABLED": {

            return {...state, ...action.payload};
        }
        case "CHECKED": {

            return {...state, isChecked: !state.isChecked};
        }
        default: return state;
    }
};

export const setResponseAC = (response: string) => {
    return {type: "SET-RESPONSE",
        payload: {
            response,
    }} as const
};

export const ToggleIsDisabledButtonAC = (isDisabled: boolean) => {
    return {type: "TOGGLE-DISABLED",
        payload: {
            isDisabled,
    }} as const
} ;
export const checkedAC = () => {
    return {type: "CHECKED"} as const
} ;