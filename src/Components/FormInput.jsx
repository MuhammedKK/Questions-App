import React, {useState, useRef} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Questions } from '../API/Questions';
const FormInput = ({add, notify}) => {

    const [ques, setQues] = useState("");
    const [ans, setAns] = useState("");
    console.log(ques, ans)
    console.log(Questions)

    // Ref The Question Input
    const quesRef = useRef();

    // Handle Add Item
    const addItem = (e) => {
        e.preventDefault()
        // Push The Item To The Main Data

        if(ques === "" || ans === "") {
            notify("Please Complete The Data First", "Error");
            return ;
        }
        Questions.push({
            id: Math.random(),
            question:ques,
            answer: ans
        })
        // Clear Inputs
        setQues("");
        setAns("");
        add();
        // Focus On The Question Input After Adding
        quesRef.current.focus()
    }
    return (
        <Row>
            <Form className='d-flex justify-content-center'>
                <Col sm="5">
                    <Form.Control ref={quesRef} onChange={(e) => setQues(e.target.value)} value={ques} className='' type="text" placeholder="Enter The Question" />
                </Col>
                <Col sm="5">
                    <Form.Control onChange={(e) => setAns(e.target.value)} value={ans} type="text" placeholder="Enter The Answer" />
                </Col>
                <Col sm="2">
                    <Button onClick={(e) => addItem(e)} variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>          
            </Form>
        </Row>
    )
}

export default FormInput