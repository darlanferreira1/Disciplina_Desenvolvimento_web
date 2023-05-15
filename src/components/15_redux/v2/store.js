import {configureStore} from '@reduxjs/toolkit';
import idReducer from '../slices/idSlice'; //exportando o reducer

export const store = configureStore({ //estado global da minha aplicação
    reducer: {
        id: idReducer
    }
})