import { tasksContext } from '../context/tasksContext';
import classes from './Progressbar.module.css';
import './UI/CSSvariables.module.css';
import { useContext } from 'react';

const Progressbar = () => {

    const { tasks, emojiesOn } = useContext(tasksContext);
    const completedTasks = tasks.filter(task => task.isChecked);
    let percentageComplete = Math.round((completedTasks.length / tasks.length) * 100);
    if (!percentageComplete) percentageComplete = 0;

    return(
        <>
        <div className={classes.progressbarOuterContainer}>
        { completedTasks.length > 0 &&
        <div className={classes.progressbarContainer}>
            <div className={classes.progressbar} style={{width: `${percentageComplete}%`}}>
                <div className={classes.progressbarText}>{`${percentageComplete}%`}</div>
            </div>
        </div>}
        </div>
        </>
    )

}


export default Progressbar;