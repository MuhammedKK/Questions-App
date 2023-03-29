import React from 'react'
import {Accordion, Button} from 'react-bootstrap'
import { Questions } from '../API/Questions'

const Answers = ({data, itemDeleted}) => {

    // Data From The Localstorage
    const localData = JSON.parse(localStorage.getItem("items"));
    console.log(localData)

    // Handle Delete Item 
    const deleteItem = (id) => {
        // get The Item From The Data Based On The ID
        const itemIndex = Questions.findIndex((item) => item.id === id);
        console.log(itemIndex)
        
        // Delete The Item From The Data
        Questions.splice(itemIndex, 1);

        // Rerender The State To Catch The Changes
        itemDeleted();
    }

    return (
        <Accordion defaultActiveKey="0" className='my-4'>
            {
                localData?.length >=1 ? (
                    (localData?.map((item, index) => {
                        return (
                            <Accordion.Item key={index} eventKey="0" className="my-3">
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="item-body d-flex justify-content-between">
                                        <p className='d-inline'>{item.answer}</p>
                                        <Button onClick={() => deleteItem(item.id)}>Delete Answer</Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }))
                ) : <h2>No Question To Show</h2>
            }
        </Accordion>
    )
}

export default Answers