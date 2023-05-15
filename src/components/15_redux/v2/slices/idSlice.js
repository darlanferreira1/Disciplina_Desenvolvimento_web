//as fatias dos slices servem para acessar os dados do estado global
import {createSlice} from '@reduxjs/toolkit'; 

const initialState = { value: 100 }


export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: { //objeto json onde cada propriedade é uma função
        incrementar: (state)=>state.value+1  , //passando funções seta como parâmetro
        decrementar: (state)=>state.value-1 //passando funções seta como parâmetro),
    }
}) 

export const {incrementar, decrementar} = idSlice.actions //exportando as funções incrementar e decrementar
export default idSlice.reducer //exportando o reducer