import { configureStore } from "@reduxjs/toolkit";
import chartReducer from '../features/chartsSlice';
import dataReducer from '../features/dataSlice';

const store = configureStore({
    reducer: {
        chart: chartReducer,
        data: dataReducer,
    }
})

export default store;