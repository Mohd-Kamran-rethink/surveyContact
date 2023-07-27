import React, { useEffect, useState } from "react";
import { fetchData } from "../Api/api";
import LineGraph from "../Components/Charts/LineGraph"; // Import the LineGraph component
import Map from "../Components/Map/Map"; // Import the Map component

const Dashboard = () => {
  const [lineGraphData, setLineGraphData] = useState([]);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    // Fetch data for the line graph
    async function fetchLineGraphData() {
      try {
        const ApilineGraphData = await fetchData(
          "https://disease.sh/v3/covid-19/all"
        );
        setLineGraphData([ApilineGraphData]);
      } catch (error) {
        console.error("Error fetching data for the line graph:", error);
      }
    }

    // Fetch data for the map
    async function fetchMapData() {
      try {
        const mapData = await fetchData(
          "https://disease.sh/v3/covid-19/countries"
        );
        setMapData(mapData);
      } catch (error) {
        console.error("Error fetching data for the map:", error);
      }
    }

    // Calling both the functions to fetch data
    fetchLineGraphData();
    fetchMapData();
  }, []);

  return (
    <div className="flex">
      <h2>Line Graph: Cases Fluctuations</h2>
      <div className="flex-1">
        {lineGraphData?.length > 0 ? (
          <LineGraph data={lineGraphData} />
        ) : (
          <p>Loading line graph data...</p>
        )}

        <h2>Map: Country Cases</h2>
        <div style={{ height: "400px" }}>
          {mapData.length > 0 ? (
            <div>
              <Map data={mapData} />
            </div>
          ) : (
            <p>Loading map data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
