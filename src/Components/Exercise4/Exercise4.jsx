import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Exercise1 = () => {
    // 2. Create a state to store all the tasks
    const [tasks, setTasks] = useState([]);

    // 3. Create a state to store the current task
    const [task, setTask] = useState('');

    /* 4. Create a function that adds the task to the task list state
       Use e.preventDefault() to prevent form submission, and spread operator to update the tasks */
    const addTask = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask(''); // Clear the input field after adding the task
        }
    };

    /* 5. Create a function to delete one element of the list
       Use the .filter method to remove the task */
    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <Container className='my-5'>
            <h1>Exercise 4: Task Manager</h1>
            {/* 6. Function Call */}
            <Form className='d-flex' onSubmit={addTask}>
                {/* 7. Set value attribute and its value */}
                {/* 8. Call the function using the onChange event */}
                <Form.Control
                    className='w-75'
                    type="text"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <Button type="submit" variant="primary" className="ms-2">Add Task</Button>
            </Form>
            <div className='mt-5'>
                <ol className='w-25'>
                    {/* 9. Show all the tasks */}
                    {tasks.map((task, index) => (
                        <li key={index} className='d-flex justify-content-between'>
                            <span>{task}</span>
                            {/* 10. Call the delete function */}
                            <Button variant="danger" onClick={() => deleteTask(index)}>Delete</Button>
                        </li>
                    ))}
                </ol>
            </div>
        </Container>
    );
}

export default Exercise1;
