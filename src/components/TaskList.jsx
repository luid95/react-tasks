import React, { useContext } from 'react';
import TaskItem from '../containers/TaskItem';
import AppContext from '../context/AppContext';

const TaskList = () => {

    //realizar el llamado de nuestro AppContext
	const {state} = useContext(AppContext);

    return (
        <div>
            <p>Tasks List - <strong>{state.tasks.length}</strong></p>
            {state.tasks.map((task) => (
                <TaskItem 
                    task={task} 
                    key={task.name} 
                />
            ))}
        </div>
    )
}

export default TaskList
