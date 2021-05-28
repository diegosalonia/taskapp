import React, { useState } from 'react';

export const TaskCreator = props => (

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    return (
        <div className="my-1" >
            <input 
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />
        </div>
    )
)