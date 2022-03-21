const initState = {
    theme: "some"

};

type initStateType = {
    theme: string
}

type ActionType = {
    type: "THEME-CHANGE",
    payload: {
        theme: string,
    }
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "THEME-CHANGE": {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): ActionType => {
    return {type: "THEME-CHANGE",
        payload: {
        theme: theme,
    }}
}; // fix any