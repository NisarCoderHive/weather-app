import React from 'react'

const Weather = (props)=>{
    return(
        <div className="container">
        <div className="cards">
            <h1 className="pt-2">{props.cityname}</h1>

            <h5 className="py-4">
            </h5>
            <h1 className="py-2">{props.celsius}&deg;</h1>
            {minmaxTemp(props.mintemp,props.maxtemp)}
            <h4 className="py-3">{props.description}</h4>

        </div>
        </div>
   );
};

function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>

    );
}

export default Weather;