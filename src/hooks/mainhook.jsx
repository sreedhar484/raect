import React, { useState, useEffect } from "react";
import One from "./one";
import Axios from "axios";

export const UserContext = React.createContext();

function Mainhook() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    Axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => setstate(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <UserContext.Provider value={state}>
        <One />
      </UserContext.Provider>
    </div>
  );
}

export default Mainhook;
