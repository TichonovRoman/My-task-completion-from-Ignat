import {UserType} from "../HW8";

type ActionType = {
    type: 'sortUp' | 'sortDown' | 'check'
}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return [...state.sort((a,b)=> a.name > b.name ? -1 : 1)]
        }
        case 'sortDown': {

            return [...state.sort((a,b)=> a.name > b.name ? 1 : -1)]
        }
        case 'check': {
            return state.filter((el: UserType) => el.age > 18)
        }
        default:
            return state
    }
}