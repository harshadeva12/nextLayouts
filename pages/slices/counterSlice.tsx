import { createSlice } from "@reduxjs/toolkit"
import React from "react";
const initialState={
    value:0,
    value2:''
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state) => {
            console.log("value",state.value);
            state.value += 1

        },
        decrement:(state) => {
            state.value -= 1
        },
        addToSave:(state) =>{
            console.log("valuee",state.value2);
            const [data, setData] = React.useState({
                phone: "",
               
              });
        }

    }

});
export const {increment,decrement,addToSave} = counterSlice.actions;
export default counterSlice.reducer;