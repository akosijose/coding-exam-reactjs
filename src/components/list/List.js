import "./list.css";
import { useState, useEffect } from "react";
import Moment from "moment";

const List = () => {
  const [list, fetchList] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://api.spacexdata.com/v4/launches");
      const data = await res.json();
      fetchList(data);
    }, 3000);
  }, []);

  return (
    <div>
      <main>
        {list.map((value) => {
          return (
            list && (
              <div className="container" key={value.id}>
                <div className="image">
                  <img src={`${value.links.patch.large}.png`} alt="image" />
                </div>
                <div className="text">
                  <div className="header">
                    <h3>
                      {value.flight_number}: {value.name} (
                      {Moment(value.date_local).format("DD-MM-YYYY")})
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
            )
          );
        })}
      </main>
      {!list && <div>loading...</div>}
    </div>
  );
};

export default List;
