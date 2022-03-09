import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import preLoader from "./img/Hourglass.gif"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const timeout = () => dispatch(loadingAC(false))


    const setLoading = () => {
        if (!loading) {
            dispatch(loadingAC(true))
            setTimeout(timeout, 2000)
        }
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? <div><img src={preLoader}/></div>
                : <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>

            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
