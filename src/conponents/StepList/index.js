import React from "react";

import { List, Step } from "./styles";

const StepList = ({ children }) => {
  console.log(children);
  return (
    <List>
      <Step passed>basic configuration</Step>
      <Step>team / votes</Step>
      <Step>feedback</Step>
    </List>
  );
};
export default StepList;
