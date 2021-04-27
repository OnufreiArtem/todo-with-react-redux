import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";

import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTaskAction } from "../../../actions";

const AddTaskLayout = styled.div`
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    border: none;
    padding: 8px 15px;
    font-size: 1.2rem;
    border-bottom-left-radius: 999px;
    border-top-left-radius: 999px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-left: 3px solid black;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    border: none;
    padding: 8px 15px;
    font-size: 1.2rem;
    border-bottom-right-radius: 999px;
    border-top-right-radius: 999px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
    transition: 0.3s all;
    background-color: var(--clr2);
    color: var(--clr5);

    &:hover {
        background-color: var(--clr3);
    }
`;

function createTask(title) {
    return {
        id: nanoid(),
        title: title,
        done: false,
    };
}

export default function AddTask({ onAdd }) {
    const taskInput = useRef();
    const [taskTitle, setTaskTitle] = useState("");
    const dispatch = useDispatch();

    const addTask = () => {
        if (taskTitle.length != 0)
            dispatch(addTaskAction(createTask(taskInput.current.value)));
        setTaskTitle(``);
    };

    const onKeyEvent = (e) => {
        if(e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <AddTaskLayout>
            <Input
                ref={taskInput}
                value={taskTitle}
                placeholder={"Your task here..."}
                onKeyDown={(e) => onKeyEvent(e)}
                onChange={() => setTaskTitle(taskInput.current.value)}
            ></Input>
            <Button onClick={() => addTask()}>Add</Button>
        </AddTaskLayout>
    );
}
