import { findRoute } from "./utils/findRoute";
import { findStations } from "./utils/findStations";
import stationData from "./data.json";
import { useEffect, useState } from "react";
import { createGraph } from "./utils/createGraph";

interface IOutput {
  cost: number;
  path: string[];
}

// to improve this I would use useReducer instead of multiple useStates
export default function MainContent(): JSX.Element {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState<IOutput>({ cost: 0, path: [] });
  const [cost, setCost] = useState(0);
  const [path, setPath] = useState<string[]>([]);

  const stations = findStations(stationData);

  const pathList = path.map((station) => <li key={station}>{station}</li>);

  const graphData = createGraph(stationData);

  function handleSelectStart(event: any) {
    setStartPoint(event.target.value);
  }

  function handleSelectEnd(event: any) {
    setEndPoint(event.target.value);
  }

  function handleClick(event: any) {
    if (!startPoint) {
      alert("Please enter a valid start location");
    } else if (!endPoint) {
      alert("Please enter a valid end location");
    } else if (startPoint === endPoint) {
      alert("Start location must be different from end location");
    } else {
      setToggle(!toggle);
      setResult(findRoute(startPoint, endPoint, graphData));
    }
  }

  function handleReset(event: any) {
    setToggle(!toggle);
    setStartPoint("");
    setEndPoint("");
    setResult({ cost: 0, path: [] });
    setCost(0);
    setPath([]);
  }

  useEffect(() => {
    if (result.cost > 0) {
      setCost(result.cost / 1000);
      setPath(result.path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <>
      <div className="responsive-wrapper">
        <section className="route-form">
          <h2>Find the shortest journey...</h2>

          <div className="select-container">
            <div className="select-label">
              <p>From: </p>
              <select onChange={handleSelectStart}>
                <option value="">Select starting station</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-label">
              <p>To: </p>
              <select onChange={handleSelectEnd}>
                <option value="">Select destination station</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="button-bar">
            <button onClick={handleClick}>Calculate Route</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </section>

        {cost > 0 ? (
          <section className="route-result">
            <h2>The shortest journey is:</h2>
            <h3>Start Point: {startPoint} </h3>
            <h3>End Point: {endPoint}</h3>
            <h3>Distance: {cost}</h3>
            <h3>Changes: </h3>
            <ol className="list">{pathList}</ol>
          </section>
        ) : (
          <section className="instruction">
            <h3>
              Select a start and end point and click calculate to find the
              shortest available route
            </h3>
          </section>
        )}
      </div>
    </>
  );
}
