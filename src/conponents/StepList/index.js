import React, { useContext } from "react";

import { AppContext } from "../../providers";
import { List, Step } from "./styles";

const StepList = () => {
  const { state } = useContext(AppContext);
  return (
    <List>
      <Step passed>basic configuration</Step>
      {state.step > 1 ? (
        <Step passed>team / votes</Step>
      ) : (
        <Step>team / votes</Step>
      )}
      {state.step < 3 ? <Step>feedback</Step> : <Step passed>feedback</Step>}
    </List>
  );
};
export default StepList;
