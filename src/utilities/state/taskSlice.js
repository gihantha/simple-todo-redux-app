import {createSlice, nanoid} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        storeTask: (state, action) => {
            const task = {id: nanoid(), task: action.payload}
            state.tasks.push(task)
        },

        removeTask: () => {

        }

    }
})

export const {storeTask, removeTask} = taskSlice.actions

export default taskSlice.reducer