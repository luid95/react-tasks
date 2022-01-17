import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {

  //hacer referencia a la informacion que se enviara por en context
	const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <TaskForm />
      <TaskList/>
    </AppContext.Provider>
  );
}

export default App;
