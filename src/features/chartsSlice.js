import { createSlice } from "@reduxjs/toolkit";
import { getCustomDateString } from "../utils";

const initialState = {
    entries: [],
    temperature: {
        labels: [],
        datasets: [],
    },
    humidity: {
        labels: [],
        datasets: [],
    },
    pressure: {
        labels: [],
        datasets: [],
    }
}

export const chartsSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        addChart: (state,action) => {
            const fullForecast = action.payload;

            if(!state.entries.includes(fullForecast.city.name)) {

                const labels = fullForecast.list.map(item => getCustomDateString(new Date(item.dt_txt)));
                const temperatureValues = fullForecast.list.map(item => item.main.temp);
                const humidityValues = fullForecast.list.map(item => item.main.humidity);
                const pressureValues = fullForecast.list.map(item => item.main.pressure);

                state.entries = [...state.entries, fullForecast.city.name];
                state.temperature.labels = labels;
                state.humidity.labels = labels;
                state.pressure.labels = labels;

                state.temperature.datasets = [...state.temperature.datasets, {label: fullForecast.city.name ,data: temperatureValues}];
                state.humidity.datasets = [...state.humidity.datasets, {label: fullForecast.city.name ,data: humidityValues}];
                state.pressure.datasets = [...state.pressure.datasets, {label: fullForecast.city.name ,data: pressureValues}];
            }
        },
        removeChart: (state,action) => {

            const index = state.entries.indexOf(action.payload);

            state.entries.splice(index,1);
            state.temperature.datasets.splice(index,1);
            state.humidity.datasets.splice(index,1);
            state.pressure.datasets.splice(index,1);

        },
    }
})

export const { addChart, removeChart } = chartsSlice.actions;
export default chartsSlice.reducer;