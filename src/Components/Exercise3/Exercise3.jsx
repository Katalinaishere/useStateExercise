import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const Exercise1 = () => {
    // 2. Create a getter and setter to get the characters
    const [text, setText] = useState('');

    // 3. Create a getter for the max characters
    const maxCharacters = 50;

    // 4. Create a function to get the value from input
    const handleTextChange = (e) => {
        const inputText = e.target.value;
        // 5. Check if the max number of characters is reached
        if (inputText.length <= maxCharacters) {
            // 6. If the max is not reached, update the setter for the characters
            setText(inputText);
        }
    };

    return (
        <Container className='my-5'>
            <h1>Exercise 3: Character Counter</h1>
            <Form>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    {/* 7. Set value attribute and its value */}
                    {/* 8. Call the function using the onchange event */}
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={text} 
                        onChange={handleTextChange} 
                    />
                </Form.Group>
            </Form>
            {/* 9. Show the result; if max value is not reached, the color of the number should be green, else it should be red */}
            <p>
                There have been used{' '}
                <span style={{ color: text.length <= maxCharacters ? "green" : "red" }}>
                    {text.length}
                </span>{' '}
                characters. Maximum: {maxCharacters} characters.
            </p>
            <hr />
        </Container>
    );
};

export default Exercise1;
