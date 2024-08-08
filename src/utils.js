import {stateCoordinates, WEEKDAYS,MONTHS} from './constants';

export const getAPILink = (lat,lon,units,cnt) => {
    const unitsText = units ? '&units=' + units : '';
    const cntText = cnt ? '&cnt=' + cnt : '';

    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${unitsText}${cntText}&appid=${import.meta.env.VITE_API_KEY}`;
};

export const getStateCoordinates = (stateName) => {
    if(stateName in stateCoordinates) {
        return stateCoordinates[stateName];
    }
    else {
        return {"lat": 0, "lon": 0};
    }
}

export const getCustomDateString = (date) => {
    return `${date.getHours().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${date.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })} ${WEEKDAYS[date.getDay()]} (${date.getDate()}th ${
        MONTHS[date.getMonth()]
      })`;
}