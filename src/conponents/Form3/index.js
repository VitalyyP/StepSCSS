import React, { useContext } from "react";

import { AppContext } from "../../providers";
import Radio from "../Radio";
import Checkbox from "../Checkbox";
import {
  FormBody,
  FeedbackTitle,
  Area,
  RadioList,
  RadioItem,
  CheckboxList,
  CheckboxItem,
  RateList,
  Feedback,
} from "./styles";
import Rate from "../Rate";

const Form3 = () => {
  const { state, dispatch } = useContext(AppContext);
  const { categoriesOfRate, nextStage } = state;

  const setConfirmNextStage = (e) => {
    const value = e.target.value;
    const changedVotes = nextStage.map((el) => ({
      ...el,
      isChecked: el.category === value,
    }));
    dispatch({ type: "setConfirmNextStage", payload: changedVotes });
  };

  const onChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "setOption", payload: { feedback: value } });
  };

  const onCheck = (e) => {
    const name1 = e.target.name;
    const isChecked1 = e.target.checked;
    dispatch({ type: "setChecked", payload: { name1, isChecked1 } });
  };

  const setRate = (e) => {
    if (e.target === e.currentTarget) return;
    const nameOfRate = e.currentTarget.id;
    const valueOfRate = e.target.id;
    const categoriesWithRate = categoriesOfRate.map((el) =>
      el.name === nameOfRate
        ? {
            ...el,
            rate: valueOfRate,
          }
        : el
    );
    dispatch({ type: "setRate", payload: categoriesWithRate });
  };

  return (
    <form>
      <FormBody>
        <FeedbackTitle>Feedback</FeedbackTitle>
        <Area>
          <RadioList onClick={setConfirmNextStage}>
            {nextStage.map(({ id, category }) => {
              return (
                <RadioItem key={id}>
                  <Radio
                    name="category"
                    defaultValue={category}
                    votes={nextStage}
                  >
                    {category}
                  </Radio>
                </RadioItem>
              );
            })}
          </RadioList>
          {state.nextStage[1].isChecked && (
            <CheckboxList>
              <CheckboxItem>
                <Checkbox id="lackExperience" onCheck={onCheck} form={state}>
                  Not suitable due to lack of specialized experience
                </Checkbox>
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox id="notFitSofftkills" onCheck={onCheck} form={state}>
                  Did not fit in soft skills
                </Checkbox>
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox id="bedTest" onCheck={onCheck} form={state}>
                  Bad test
                </Checkbox>
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox id="other" onCheck={onCheck} form={state}>
                  Other
                </Checkbox>
              </CheckboxItem>
            </CheckboxList>
          )}
        </Area>
        <RateList>
          {categoriesOfRate.map(({ id, name, rate }) => {
            return (
              <Rate key={id} onClick={setRate} rate={rate}>
                {name}
              </Rate>
            );
          })}
        </RateList>
        <Feedback
          placeholder="Your feedback"
          onChange={onChange}
          value={state.feedback}
        />
      </FormBody>
    </form>
  );
};

export default Form3;
