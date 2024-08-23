// 1. import useState
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
const Exercise1 = () => {
    // 2. Create a state to store all the tasks
    // 3. Create a state to store the task
    /* 4. Create a function that add the task in the all task state
     e.preventDefault and spread operator should be used inside set*/

    /* 5. Create a function to delete one element of the list
     .filter method should be used
 */
    return (
        <Container className='my-5'>
            <h1>Exercise 4: </h1>
            {/* 6. Function Call */}
            <Form className='d-flex'>
                {/* 7. Set value attribute and its value */}
                {/* 8. Call the function using the onchange event */}
                <Form.Control
                    className='w-75'
                    type="text"
                    id="task"
                />
                <Button type="submit" variant="primary" >Add Task</Button>
            </Form>
            <div className='mt-5'>
                <ol className='w-25'>
                    {/* 9. Show all the tasks */}
                    <li className='d-flex justify-content-between'>
                        <span>task</span>
                        {/* 10. Call the delete function  */}
                        <Button variant="danger">Delete</Button>
                    </li>
                </ol>
            </div>
        </Container>
    )
}

export default Exercise1