import React from 'react';

import { nanoid } from 'nanoid';

import styled from 'styled-components';

import { useSelector } from 'react-redux';

import AddTask from './Controls/AddTask';
import Task from './Task/Task';

const TodoLayout = styled.div`
    background-color: var(--clr2);
    border-right: 5px solid black;
    border-left: 5px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    box-shadow: 0 0 10px #000005;
    border-radius: 5px;
    padding: 0 30px 50px;
`

const TodoTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 20px;
`

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const SectionTitle = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 0;
`

const SectionDivider = styled.hr`
    border: none;
    height: 2px;
    background-color: var(--clr5);
    margin-top: 0;
`
const SectionContainer = styled.div`
    padding: 5px 20px;
`

const NoTaskLabel =  styled.span`
    color: var(--clr5t);
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;

`

export default function Todo(props) {

    const todoList = useSelector(state => state);

    const doneTasks = () => todoList.filter(task => task.done);
    const assignedTasks = () => todoList.filter(task => !task.done);
    
    return (
        <TodoLayout>
            <TodoTitle>Your todo</TodoTitle>
            <AddTask onAdd={() => {}}></AddTask>
            <SectionTitle>Assigned tasks</SectionTitle>
            <SectionDivider />
            <SectionContainer>
                {
                    assignedTasks().length === 0 ? <NoTaskLabel>No tasks</NoTaskLabel> : <TodoListContainer>
                    {
                        assignedTasks()?.map(task => <Task key={nanoid()} task={task} />)
                    }
                    </TodoListContainer>
                }
            </SectionContainer>

            <SectionTitle>Implemented tasks</SectionTitle>
            <SectionDivider />
            <SectionContainer>
                {
                    doneTasks().length === 0 ? <NoTaskLabel>No tasks</NoTaskLabel> : <TodoListContainer>
                    {
                        doneTasks()?.map(task => <Task key={nanoid()} task={task} />)
                    }
                    </TodoListContainer>
                }
            </SectionContainer>

            
        </TodoLayout>
    )
}
