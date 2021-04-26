import React from 'react';

import { nanoid } from 'nanoid';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import AddTask from './Controls/AddTask';
import Task from './Task/Task';

const TodoLayout = styled.div`
    background-color: yellow;
    width: 350px;
    padding: 30px;
    border-right: 5px solid black;
    border-left: 5px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    box-shadow: 0 0 10px #000005;
    border-radius: 5px;
`

const TodoTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    padding-bottom: 20px;
`

const TodoListContainer = styled.div`
    width: 300px;

`

function createTask(title) {
    return {
        id: nanoid(),
        title: '',
        done: false
    }
}

export default function Todo(props) {

    const todoList = useSelector(state => state);
    
    return (
        <TodoLayout>
            <TodoTitle>Your todo</TodoTitle>
            <AddTask onAdd={() => {}}></AddTask>
            {
                todoList.length === 0 ? <span>No tasks</span> : <TodoListContainer>
                {
                    todoList?.map(task => <Task key={nanoid()} task={task} />)
                }
                </TodoListContainer>
            }
            
        </TodoLayout>
    )
}
