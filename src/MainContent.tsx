import { findRoute } from "./utils/findRoute"
import { findStations } from "./utils/findStations"
import stationData from "./data.json"
import StationList from "./StationList"
import { useState } from "react"
import { createGraph } from "./utils/createGraph"



export default function MainContent(): JSX.Element {

    const [startPoint, setStartPoint] = useState("");
    const [endPoint, setEndPoint] = useState("");

    const stations = findStations(stationData)

    const stationCodes = stations.map((station, index) => 
        <StationList
        key = {index} 
        station ={station}/> )

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    const graphData = createGraph(stationData);

    const result = findRoute(startPoint, endPoint, graphData);

    

    return (
        <>
        <div className="responsive-wrapper">

        <section className="route-form">
         <form onSubmit={handleSubmit}>   
        <h2>Find the shortest journey...</h2>
        <div className="route-input">
        <p>From: </p>
        <input 
        type="text" 
        placeholder="Enter start station code"
        value={startPoint}
        onChange={(e) => setStartPoint(e.target.value)}
        ></input>
        </div>

        <div className="route-input">
        <p>To: </p>
        <input type="text" 
        placeholder="Enter destination station code"
        value={endPoint}
        onChange={(e) => setEndPoint(e.target.value)}
        ></input>
        </div>


        <button type="submit" >Calculate Route</button> 
        </form>
        </section>



        <section className="route-result">
            <h2>The shortest journey is:</h2>
            <h3>Start Point: {startPoint} </h3>
            <h3>End Point: {endPoint}</h3>
            <h3>Distance: </h3>
            <h3>Changes:  </h3>
        </section>

        <section className="station-list">
        <h2>Available Stations:</h2>
         
        </section>

        </div>
        </>

    )
}