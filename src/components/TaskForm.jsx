import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const TaskForm = () => {
    //Inicializacion del estado task
    const [task, setTask] = useState("");

    //realizar el llamado de nuestro AppContext
	const {addToTask} = useContext(AppContext);
    

    const handleChange = (e) => {
        //Se cambia es estado de task
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Se crea la nueva tarea  para agregarla a la lista
        const newTask = {
            name:task,
            checked: false
        }

        //Se envia a la lista de tareas
        addToTask(newTask);

        setTask("");
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Agregar una nueva tarea</h2>
                <br/>

                <input type="text" name="name" value={task} onChange={handleChange} placeholder='Nueva Tarea' />
                <br/>

                <button>Agregar Tarea</button>
            </form>
        </div>
    )
}

export default TaskForm
