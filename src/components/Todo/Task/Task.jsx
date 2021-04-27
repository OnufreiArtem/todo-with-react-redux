import React, {useState, useEffect, useRef} from 'react';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { removeTaskAction, updateTaskAction }  from '../../../actions'

const TaskLayout = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .3s all;
    width: 100%;

    &:hover {
        background-color: var(--clr3);
        transform: translateY(5px);
    }
    
`

const TaskTitle = styled.input`
    flex: 8;
    display: block;
    background-color: transparent;
    border: none;
    padding: 5px;
    color: var(--clr5);
    font-size: 1.3rem;
    border: 2px solid transparent;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    text-decoration: ${props => props.done ? `line-through`: `none`};
   

    &:focus {
        background-color: white;
        outline: none;
        text-decoration: none;
    }
`

const ControlsContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ControlBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.3rem;
    transition: .3s all;
    border-radius: 999px;
    cursor: pointer;
`

const RemoveBtn = styled(ControlBtn)`
    &:hover {
        background-color: var(--clr3);
        color: #c41212;
    }
`

const ChangeBtn = styled(ControlBtn)`
    
    color: ${props => props.done ? `--var(clr1)` : `--var(clr5)`};

    &:hover {
        background-color: var(--clr3);
        color: var(--clr1);
    }

`

export default function Task({task}) {
    const titleInput = useRef();
    const [done, setDone] = useState(task.done);
    const [taskTitle, setTaskTitle] = useState(task.title);
    const dispatch = useDispatch();

    const saveChanges = () => {
        task.title = taskTitle;
        dispatch(updateTaskAction(task));
        
    }

    const onBlurEvent = () => {
        saveChanges();
    }

    const taskWithChangedState = (task) => {
        let t = Object.assign(task);
        t.done = !t.done;
        return t;
    }

    return (
        <TaskLayout done={task.done}>
            <TaskTitle done={task.done} ref={titleInput} value={taskTitle} onBlur={() => onBlurEvent()} onChange={() => setTaskTitle(titleInput.current.value)} />

            <ControlsContainer>  
                <RemoveBtn onClick={() => dispatch(removeTaskAction(task.id))}><i class="fas fa-trash"></i></RemoveBtn>
                <ChangeBtn done={task.done} onClick={() => dispatch(updateTaskAction(taskWithChangedState(task)))}><i class="fas fa-check-circle"></i></ChangeBtn>
            </ControlsContainer>
        </TaskLayout>
    )


}