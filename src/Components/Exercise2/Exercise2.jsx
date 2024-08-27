// 1. import useState
import React, {useState} from'react'
import { Container, Form } from 'react-bootstrap'
import "./exercise2.css"
const Exercise1 = () => {
    // 2. Create a get-er and set-er for the background color
    const [color,setColor]= useState();
    return (
        <Container className='my-5'>
            <h1>Exercise 2: </h1>
            <Form>
                {/* 3. Set value attribute and its value */}
                {/* 4. Call the function using the onchange event */}
                <Form.Select value={color} onChange={(e)=> setColor(e.target.value)}>
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </Form.Select>
            </Form>
            {/* 5. Fix the background value so it changes according to the selection */}
            <div className='element mt-5' style={{ backgroundColor: color }}></div>
            <hr />
        </Container>
    )
}

export default Exercise1
