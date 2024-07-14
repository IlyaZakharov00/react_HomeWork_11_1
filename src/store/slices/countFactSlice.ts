import { createSlice } from "@reduxjs/toolkit"

export interface ICountState {
    count: number | undefined;
}

const initialState: ICountState = {
    count: undefined
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.count = Number(action.payload);
        }
    }
})

export const {changeInput} = counterSlice.actions
export default counterSlice.reducer