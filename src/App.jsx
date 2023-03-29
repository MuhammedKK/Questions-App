import React, {useState} from 'react';
import {Button,Container, Row, Col} from 'react-bootstrap'
import Answers from './Components/Answers';
import FormInput from './Components/FormInput';
import { Questions } from './API/Questions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [data, setData] = useState(Questions);
  // console.log(data)

  // Handle Validation
  const notify = (msg, type) => {
    if(type == "Success")
      toast.success(msg)
    else if (type == "Error")
      toast.error(msg)
  }
  
  // localData
  const localData = JSON.parse(localStorage.getItem("items"));

  // ReRender The State After Questions Changed
  const onAdd = () => {
    localStorage.setItem("items", JSON.stringify([...Questions]));
    setData([...Questions]);
    notify("Item Added SuccessFully", "Success");
  }

  // handle Clear All Button
  const clearAll = () => {
    localStorage.removeItem("items");
    setData([]);
    Questions.splice(0, Questions.length);
    notify("All Items Removed Successfully", "Success");
    // console.log(Questions.splice(0, Questions.length))
  }

  // Handle Delete Item 
  const itemDeleted = () => {
    localStorage.setItem("items", JSON.stringify([...Questions]));
    setData([...Questions]);
  }
  return (
    <div className="App fs-5">
      <Container>
        <Row>
          <Col sm="4">
            <div className="question-header">
              Common Questions And Answers
            </div>
          </Col>
          <Col sm="8">
            <FormInput add={onAdd} notify={notify} />
            <Answers itemDeleted={itemDeleted} data={data} />
            {
              data?.length >= 1 ? (
                <Button onClick={clearAll} variant="primary" className='w-100'>Clear All</Button>
              ) : null
            }
            
          </Col>
        </Row>
        <ToastContainer 
          position='top-left'
          autoClose="2000"
        />
      </Container>
    </div>
  );
}

export default App;
