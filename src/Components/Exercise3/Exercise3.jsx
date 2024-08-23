// 1. import useState
import React from 'react'
import { Container, Form } from 'react-bootstrap'
const Exercise1 = () => {
    // 2. Create a get-er and set-er to get the characters
    // 3. Create a get-er for the max of characters
    // 4. Create a function to get the value from input
    // 5. Inside the function write an instruction to check if the max number of character is reached
    // 6. If the number of max is not reach update the set-er of the characters
    return (
        <Container className='my-5'>
            <h1>Exercise 3: Character Counter </h1>
            <Form>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    {/* 7. Set value attribute and its value */}
                    {/* 8. Call the function using the onchange event */}
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            {/* 9. Show the result if max value is not react the color of number should be green else it should be read */}
            <p>There have been used <span style={{ color: "green" }}>0</span> characters. Maximum: MAXValue characters.</p>
            <hr />
        </Container>
    )
}

export default Exercise1