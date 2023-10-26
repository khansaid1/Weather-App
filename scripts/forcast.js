const key = 'QGoROH9uv5PZAA4EMMZ7VHAz5eSGdRx0';

// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`

    const reponse = await fetch(base + query)
    const data = await reponse.json();
    return (data[0]);
}

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const reponse = await fetch(base + query);
    const data = await reponse.json();
    return (data[0]);
};

// getCity('Berlin')
// .then(data => console.log(data))
// .catch(err => console.log(err));

