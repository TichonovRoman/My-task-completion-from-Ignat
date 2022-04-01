import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {hw13Reducer} from "../../h13/bll/hw13Reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themeChanged: themeReducer,
    hw13Reducer: hw13Reducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
