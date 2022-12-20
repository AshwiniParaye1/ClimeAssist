const API_KEY = '0014ac09b667878a7c24ca84b34faf45';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';





const getWeatherData = ( infoType, searchParams ) => {

    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;