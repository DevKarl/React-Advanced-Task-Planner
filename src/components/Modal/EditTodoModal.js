
import classes from './EditTodoModal.module.css';
import { useRef } from 'react';
import Modal from '../UI/Modal';

const EditTodoModal = props => {

    const inputRef = useRef(null);

    const closeModalHandler = () => {
        props.toggleEditTodoModal();
    }

    const changeTodoTextHandler = () => {
        props.receivedChangedTodoText(props.index, inputRef.current.value)
        closeModalHandler();
    }

    return(
        <Modal 
        btnText = {'Change'}
        closeModalHandler = {closeModalHandler}
        mainBtnClick = {changeTodoTextHandler}
        clickedEnter = {changeTodoTextHandler}

        >
                <h1 className={classes.editTodoH3}>Edit Current Todo</h1>
                <textarea
                    ref={inputRef}
                    autoFocus 
                    type='text' 
                    defaultValue={props.todoText}
                    className = {classes.modalInputField}
                ></textarea>
        </Modal>
    )
}

export default EditTodoModal;