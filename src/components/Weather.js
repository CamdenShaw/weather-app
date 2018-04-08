import React from "react"

const Weather = props => {
    console.log(props)
    return (
        <div className="weather__info">
            <p className="weather__key">
                Location: {props.city ? props.city : "City"}
                {", "}
                {props.country ? props.country : "Country"}
            </p>
            <p className="weather__key">
                Temperature:{" "}
                {props.temperature ? `${Math.round(props.temperature)}°C` : "temp"}
            </p>
            <p className="weather__key">
                Conditions: {props.description ? props.description : "weather"}
            </p>
            <p className="weather__key">
                Humidity: {props.humidity ? `${props.humidity}%` : "wet or dry"}
            </p>
            <p className="weather__key">
                Minimum Temperature:{" "}
                {props.minTemp ? `${Math.round(props.minTemp)}°C` : "low"}
            </p>
            <p className="weather__key">
                Maximum Temperature:{" "}
                {props.maxTemp ? `${Math.round(props.maxTemp)}°C` : "high"}
            </p>
            {props.error && <p>Error: props.error </p>}
        </div>
    )
}

export default Weather
