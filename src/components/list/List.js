import "./list.css";
import { useState, useEffect } from "react";
import Moment from "moment";

const List = () => {
  const [list, fetchList] = useState([]);

  const getData = () => {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchList(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <main>
        {list.map((value) => {
          {/* let formatDate = Moment(value.date_local).format("DD-MM-YYYY"); */}

          return (
            <div className="container" key={value.id}>
              <div className="image">
                <img src="" alt="image" />
              </div>
              <div className="text">
                <div className="header">
                  <h3>
                    {value.flight_number}: {value.name} ({(value.date_local = Moment().format("DD-MM-YYYY"))})
                  </h3>
                </div>
                <div className="details">
                  <p>
                    <span>Details: </span>
                    {value.details}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default List;
