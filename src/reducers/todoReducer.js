export default function todoReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TASK':
            state = [...state, action.task];
            return state;
        case 'REMOVE_TASK':
            state = state.filter(item => item.id !== action.taskId);
            return state;
        case 'UPDATE_TASK':
            state = state.map(item => {
                if(item.id === action.task.id) return action.task;
                return item;
            });
            return state;
        default:
            return state;
    }
}