import React, { useContext, useReducer } from "react";
import Two from "./two";
import { UserContext } from "./mainhook";

function One() {
  const data = useContext(UserContext);
  const total = data.reduce((a, b) => a.cases + b.cases, 0);
  console.log(total);
  return (
    <div>
      <Two />
    </div>
  );
}

export default One;
