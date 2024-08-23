// 1. import useState
import React from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
const Exercise1 = () => {
    // 2. Create get-ers and set-ers for the inputs

    // 3. Create a get-er and set-er for to show alert
    // 4. Create a get-er and set-er for the message
    // 5. Create a get-er and set-er for the color of the alert

    /* 6. Create a submit function, it should check if the fields are empty,
    if are any special characters for the name and surname */

    return (
        <Container className='my-5'>
            <h1>Exercise 1: </h1>
            {/* 6.Function Call */}
            <Form>
                {/* 7. Set value attribute and its value */}
                {/* 8. Call the function using the onchange event */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
            {/* 9. Show Alert with the messages after submit: when the fields are not filled and name or surname have special character show danger
             otherwise show success
             */}
            <Alert variant="success" className='mt-5'>
                message
            </Alert>

        </Container>
    )
}

export default Exercise1
