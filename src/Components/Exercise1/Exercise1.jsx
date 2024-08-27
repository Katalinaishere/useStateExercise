// 1. import useState
import React , {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
const Exercise1 = () => {
    // 2. Create get-ers and set-ers for the inputs
    const [name , setName]= useState('');
    const [surname, setSurname]= useState('');
    // 3. Create a get-er and set-er for to show alert
    const [alert , setAlert]= useState(false);

    // 4. Create a get-er and set-er for the message
    const [message, setMessage]= useState('');
    // 5. Create a get-er and set-er for the color of the alert
    const [variant, setVariant] = useState(); 


    /* 6. Create a submit function, it should check if the fields are empty,
    if are any special characters for the name and surname */
    const handleSubmit =(e) =>{
        e.preventDefault();
        const specialChar = /[^a-zA-Z]/;
        if (specialChar.test(name) || specialChar.test(surname)) {
            setMessage('Nuk lejohen karaktere speciale');
            setVariant('danger');
            setAlert(true);
            return;
        }
        if (name.trim() === '' || surname.trim() === '') {
            setMessage('Please fill in both fields.');
            setVariant('danger');
            setAlert(true);
            return;
        }

        setMessage('Form submitted successfully!');
        setVariant('success');
        setAlert(true);

    };

    return (
        <Container className='my-5'>
            <h1>Exercise 1: </h1>
            {/* 6.Function Call */}
            <Form onSubmit={handleSubmit}>
                {/* 7. Set value attribute and its value */}

                {/* 8. Call the function using the onchange event */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text"  value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
            {/* 9. Show Alert with the messages after submit: when the fields are not filled and name or surname have special character show danger
             otherwise show success
             */}
             {alert &&
            <Alert variant={variant} className='mt-5'>
                {message}
            </Alert>
}

        </Container>
    )
}

export default Exercise1
