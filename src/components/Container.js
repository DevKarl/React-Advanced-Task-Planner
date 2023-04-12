
import classes from './Container.module.css';
import { TasksContextProvider } from '../context/tasksContext';
import Header from "./Header";
import InputField from "./InputField";
import TaskList from "./TaskList";
import './UI/CSSvariables.module.css';
import TaskActions from './TaskActions';
import Settings from './Settings';

const Container = () => {

    return(
        <main className = {classes.container}>
          <TasksContextProvider>
            <Settings/>
            <Header/>
            <InputField/>
            <TaskActions/>
            <TaskList/>
          </TasksContextProvider>
        </main>
    )
}

export default Container;