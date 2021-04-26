export function addTaskAction(task) {
    return {
        type: 'ADD_TASK',
        task: task,
    }
}

export function removeTaskAction(id) {
    return ({
        type: 'REMOVE_TASK',
        taskId: id,
    })
}

export function updateTaskAction(task) {
    return {
        type: 'UPDATE_TASK',
        task: task,
    }
}