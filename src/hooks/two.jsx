import React, { useContext, useReducer } from "react";
import { UserContext } from "./mainhook";

function Two() {
  const data = useContext(UserContext);
  return (
    <React.Fragment>
      {data.map((data, idx) => (
        <p key={idx}>
          {data.country}
          {data.cases}
        </p>
      ))}
      {/* <h1 onMouseOver={setTotal()}>Total:</h1> */}
    </React.Fragment>
  );
}
export default Two;
