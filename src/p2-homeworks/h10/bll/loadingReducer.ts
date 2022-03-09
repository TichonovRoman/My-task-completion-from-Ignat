import {createBootstrapComponent} from "react-bootstrap/ThemeProvider";

export type StateType = {isLoading: boolean}

const initState = {isLoading: false}

type ActionType = {
    type: 'TOOGLE',
    loading: boolean
}



export const loadingReducer = (state:StateType = initState, action: ActionType): StateType => {

    // fix any
    switch (action.type) {
        case 'TOOGLE': {
            return {...state, isLoading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean): ActionType => {
    return {
        type: 'TOOGLE',
        loading,
    }
} // fix any