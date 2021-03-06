import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import Hw13 from "../../h13/HW13";

function JuniorPlus() {
    return (
        <div>
            <Provider store={store}>
                <HW12/>
                <Hw13/>
            </Provider>


        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз