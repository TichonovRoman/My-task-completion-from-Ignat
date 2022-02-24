import {UserType} from "../HW8";

type ActionType = SortUpActionType | SortDownActionType | ChekActionType

type SortUpActionType = {
    type: 'sortUp'
}

type SortDownActionType = {
    type: 'sortDown'
}
type ChekActionType = {
    type: 'check'
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            // need to fix
            return state
        }
        case 'sortDown': {
            // need to fix
            return state
        }
        case 'check': {
            return state.filter((el: UserType) => el.age > 18)
        }
        default:
            return state
    }
}