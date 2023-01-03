import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error'
})

const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUSES.IDLE,
    },
    reducers : {
        getProduct(state , action){
            state.data = action.payload
        },
        setStatus(state , action){
            state.status = action.payload
        }
    }
})

export const {getProduct , setStatus} = productSlice.actions
export default productSlice.reducer


export function fetchProduct(){

    return async function fetchProductThunk(dispatch , getState){
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const fetchProduct = await fetch('')
            const res = await res.json()
            dispatch(getProduct(data))
            dispatch(setStatus(STATUSES.IDLE))
        }
        catch(err){
            console.log(err)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
