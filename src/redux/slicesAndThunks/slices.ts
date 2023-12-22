import { createSlice } from '@reduxjs/toolkit';
import { thunkDecrementValue, thunkChangeByValue, thunkIncrementValue, thunkInputValue } from './thunks';

const initialState: {
    value: number,
    isLoading: boolean,
    input: number
} = {
    value: 0,
    isLoading: false,
    input: 0
}

export const valueSlice = createSlice({
    name: 'incriment',
    initialState,
    reducers: {
    },
extraReducers: (builder) => {
    builder.addCase(thunkIncrementValue.fulfilled, (state, action)=> {
        state.value = action.payload
    });

    builder.addCase(thunkDecrementValue.fulfilled, (state, action)=> {
        state.value = action.payload
    })
  
    builder.addCase(thunkChangeByValue.fulfilled, (state, action)=> {
        state.value = action.payload
    })
    builder.addCase(thunkInputValue.fulfilled, (state, action)=> {
        state.input = action.payload
    })
        

} 
})


export default valueSlice.reducer;