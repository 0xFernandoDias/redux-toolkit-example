import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: 0
    },
    reducers: {
        increment (state) { // action
            state.counter += 1
        },
        decrement (state) { // action
            state.counter -= 1
        }
    }
})

export const { decrement, increment } = stock.actions
export default stock.reducer