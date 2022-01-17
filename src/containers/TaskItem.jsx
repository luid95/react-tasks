import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const TaskItem = ({ task }) => {

    const { removeTask, checkTask } = useContext(AppContext);

    const handleRemove = task => {

		removeTask(task);
	}


    const handleChecked = task => {

		checkTask(task);
	}

    return (
        <div>
            <div key={task.name}>
                <div>
                    <p>{task.name}</p>
                </div>
                <div>
                    <button onClick={() => handleChecked(task)} >{task.checked? 'Check': 'Checked'}</button>
                    <button onClick={() => handleRemove(task)} >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem
