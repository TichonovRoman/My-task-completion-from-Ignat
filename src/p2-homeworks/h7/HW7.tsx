import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {Col, Container, Row} from "react-bootstrap";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <Container>
                <Row xs={1} md={5} lg={7}>
                    <Col>
                        <SuperSelect
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </Col>
                    <Col>
                        <SuperRadio
                            name={'radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </Col>

                </Row>

            </Container>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
