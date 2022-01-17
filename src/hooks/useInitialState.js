import { useState } from 'react';

const initialState = {
    //estado para almacenar informacion a la lista de tareas
    tasks: []
}

const useInitialState = () => {

    //Inicializamos el state
    const [state, setState] = useState(initialState);
    
    //Crear funcion para crear tareas de nuestra lista
    const addToTask = (payload) => {
        setState({
            ...state, //mantener la informacion que ya esta en el estado
            tasks: [...state.tasks, payload] // lo que ya tiene el estado le agregamos mas informacion
        });
    };

    //Crear funcion para remover tareas de nuestra lista
    const removeTask = (payload) => {
        setState({
            ...state,
            tasks: state.tasks.filter(item => item.name !== payload.name) 
        })
    }

    //Crear funcion para actualizar tareas de nuestra lista
    const checkTask = (payload) => {
        const checkTask = payload;


        const checkTasks = state.tasks.map( (task) => {
            
            if(task.name === checkTask.name){
                task.checked = !task.checked
            }
            return task;
        });

        setState({
            ...state,
            tasks: checkTasks
        })
    }

    return {
        state,
        addToTask,
        removeTask,
        checkTask
    }
}

export default useInitialState;