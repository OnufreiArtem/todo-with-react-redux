import React, {useState, useEffect, useRef} from 'react';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { removeTaskAction, updateTaskAction }  from '../../../actions'

const TaskLayout = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TaskTitle = styled.input`
`

const ControlsContainer = styled.div`
`

const RemoveBtn = styled.button`
`

export default function Task({task}) {
    const titleInput = useRef();
    const [done, setDone] = useState(false);
    const [taskTitle, setTaskTitle] = useState(task.title);
    const dispatch = useDispatch();

    const saveChanges = () => {
        task.title = taskTitle;
        dispatch(updateTaskAction(task));
        
    }

    const onBlurEvent = () => {
        saveChanges();
    }

    return (
        <TaskLayout onClick={() => setDone(!done)}>
            <TaskTitle ref={titleInput} value={taskTitle} onBlur={() => onBlurEvent()} onChange={() => setTaskTitle(titleInput.current.value)} />

            <ControlsContainer>  
                <RemoveBtn onClick={() => dispatch(removeTaskAction(task.id))}>Remove</RemoveBtn>
            </ControlsContainer>
        </TaskLayout>
    )


}