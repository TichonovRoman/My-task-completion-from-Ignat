const initState = {
    response: "",
    isDisabled: false,
    isChecked: false,

};

export type initStateType = {
    response: string,
    isDisabled: boolean,
    isChecked: boolean,
}

type ResponseActionType = {
    type: "SET-RESPONSE",
    payload: {
        response: string,
    }
}
type ToggleIsDisabledButtonActionType = {
    type: "TOGGLE-DISABLED",
    payload: {
        isDisabled: boolean,
    }
}

type CheckedActionType = {
    type: "CHECKED"
}

export const hw13Reducer = (state = initState, action: ResponseActionType | CheckedActionType | ToggleIsDisabledButtonActionType): initStateType => { // fix any
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

export const setResponseAC = (response: string): ResponseActionType => {
    return {type: "SET-RESPONSE",
        payload: {
            response,
    }}
};

export const ToggleIsDisabledButtonAC = (isDisabled: boolean): ToggleIsDisabledButtonActionType => {
    return {type: "TOGGLE-DISABLED",
        payload: {
            isDisabled,
    }}
};
export const checkedAC = (): CheckedActionType => {
    return {type: "CHECKED"}
};