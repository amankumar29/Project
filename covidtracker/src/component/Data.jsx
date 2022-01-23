import React, { useState, useEffect } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidDAta = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidDAta();
  }, []);

  return (
    <>
    <div style={{textAlign: "center"}}>
      <h3 style={{animation:"ease-in-out"}}>🔴 LIVE</h3>
      <h4>COVID-19 CORONAVIRUS TRACKER</h4>
      </div>
      <div className="row row-cols-1 row-cols-md-3 ">
        <div className="col mb-4 ">
          <div
            className="card text-white bg-primary"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"> <h3><span> OUR </span> COUNTRY</h3></div>
            <div className="card-body">
              <h2 className="card-title">INDIA</h2>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div
            className="card text-white bg-secondary"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"><h3><span> TOTAL </span> CONFIRMED</h3></div>
            <div className="card-body">
              <h2 className="card-title">{data.confirmed}</h2>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div
            className="card text-white bg-success"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"><h3><span> TOTAL </span> RECOVERED</h3></div>
            <div className="card-body">
              <h2 className="card-title">{data.recovered}</h2>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div
            className="card text-white bg-danger"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"><h3><span> TOTAL </span> DEATH</h3></div>
            <div className="card-body">
              <h2 className="card-title">{data.deaths}</h2>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div
            className="card text-white bg-warning"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"><h3><span> TOTAL </span> ACTIVE</h3></div>
            <div className="card-body">
              <h2 className="card-title">{data.active}</h2>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div
            className="card text-white bg-dark"
            style={{ textAlign: "center" }}
          >
            <div class="card-header"><h3><span> LAST </span> UPDATED</h3></div>
            <div className="card-body">
              <h2 className="card-title">{data.lastupdatedtime}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
