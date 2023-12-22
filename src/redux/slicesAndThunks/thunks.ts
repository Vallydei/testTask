import { createAsyncThunk } from "@reduxjs/toolkit";
import {ValueService, InputService} from "../services/services";

export const thunkIncrementValue = createAsyncThunk(
    'valueSlice/thunkIncrementValue',
    async (value:number) => 
    {const additional = 1;        
    return await ValueService.getValue({value, additional})      
    }
  );

  export const thunkDecrementValue = createAsyncThunk(
    'valueSlice/thunkDecrementValue',
    async (value:number) => {
      const additional = -1
      return await ValueService.getValue({value, additional})      
    }
  );
  export const thunkChangeByValue = createAsyncThunk(
    'valueSlice/thunkChangeValue',
    async ({value, additional}: {value:number, additional:number}) => 
      await ValueService.getValue({value, additional})      
    
  );

  export const thunkInputValue = createAsyncThunk(
    'inputSlice/thunkInputValue',
    async (input:number) => 
     await InputService.getInput(input)

  );

