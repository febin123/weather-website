const key="	lDGtbAbQNnvFpA2TNP4gOsm3Vxn6KKHR";

//get weather information
const getWeather=async(id)=>{

    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const response=await fetch(base + query);
    const data=await response.json();

    return data[0];

}

//get City information
const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response=await fetch(base + query);
    const data=await response.json();

    return data[0];

}
getCity('Dublin').then(data=>{
    return getWeather(data.Key);
}).then(data=>{
    // console.log(data);
}).catch(err=> console.log(err));

getWeather('3385230');