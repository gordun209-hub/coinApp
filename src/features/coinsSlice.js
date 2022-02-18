import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchCoins from "../api/coinStatsAPI";

export const getCoins = createAsyncThunk('coins/getCoins',async()=>{
    const coins = await fetchCoins()
    return coins.map(({id,icon,name,rank,price})=>({
        id,
        icon,
        name,
        rank,
        price
    }))
})
const coinsSlice = createSlice({

        name:'coins',
        initialState:{
            coins:[],
            status:null
        },
        extraReducers:{
            [getCoins.pending]:state=>{
                state.status='loading'
            },
            [getCoins.fulfilled]:(state,{payload})=>{
                state.coins=payload
                state.status='success'
            },
            [getCoins.rejected]:(state)=>{
                state.status='failed'
            }
        }
})

export default coinsSlice.reducer