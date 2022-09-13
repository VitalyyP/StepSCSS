import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../providers/";
import Flex from "../Flex";
import Select from "../Select";
import Counter from "../Counter";
import Button from "../Button";
import Radio from "../Radio";
import CheckboxForVote from "../CheckboxForVote";
import {
  FormBody,
  TeamTitle,
  AreaForMembers,
  Card,
  DeleteMark,
  AddCard,
  DashedLine,
  VotesTitle,
  CheckboxForVoteList,
  CheckboxForVoteItem,
} from "./styles";

const Form2 = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const votes = state.votes;
  const members = state.members;

  const onChangeOptions = (e) => {
    const id = e.currentTarget.id;
    const value = e.target.value;
    const option = { [id]: value };
    dispatch({ type: "setOption", payload: option });
  };

  const onChangeCategory = (e) => {
    const value = e.target.value;
    const changedVotes = votes.map((el) => ({
      ...el,
      isChecked: el.category === value,
    }));
    dispatch({ type: "setCategory", payload: changedVotes });
  };

  const onCheck = (e) => {
    const name2 = e.target.name;
    const isChecked2 = e.target.checked;
    members.find((el) => el.name === name2).veto = isChecked2;
    dispatch({ type: "setMember", payload: members });
  };

  const addMember = () => {
    const name = prompt(`Enter member's name`);
    if (!name) return;
    const id = Date.now();
    members.push({ id, name, veto: false });
    dispatch({ type: "setMember", payload: members });
  };

  const removeMember = (e) => {
    if (e.currentTarget === e.target) return;
    const name = e.currentTarget.textContent;
    const filteredMembers = members.filter((el) => el.name !== name);
    dispatch({ type: "setMember", payload: filteredMembers });
  };

  return (
    <form>
      <FormBody>
        <TeamTitle>Team</TeamTitle>
        <Flex width="100%" justify="space-between" margin="0 0 16px 0">
          <Select
            width="200px"
            name="designs"
            id="designSelect"
            onChange={onChangeOptions}
            value={state.designSelect}
          >
            <option value="design">Design</option>
            <option
              value="firstDesing"
              // selected={state.designSelect === "firstDesing"}
            >
              First design
            </option>
            <option
              value="secondDesign"
              // selected={state.designSelect === "secondDesign"}
            >
              Second design
            </option>
          </Select>

          <Counter></Counter>
          <Select
            width="240px"
            name="members"
            id="memberSelect"
            onChange={onChangeOptions}
            value={state.memberSelect}
          >
            <option value="member">Who to send the request to</option>
            <option
              value="firstMember"
              // selected={state.memberSelect === "firstMember"}
            >
              First member
            </option>
            <option
              value="secondMember"
              // selected={state.memberSelect === "secondMember"}
            >
              Second member
            </option>
          </Select>
        </Flex>
        <Flex
          width="100%"
          justify="space-between"
          margin="0 0 24px 0"
          align="start"
        >
          <Select
            width="200px"
            name="specifics"
            id="specificSelect"
            onChange={onChangeOptions}
            value={state.specificSelect}
          >
            <option value="">Specific</option>
            <option
              value="firstSpecific"
              // selected={state.specificSelect === "firstSpecific"}
            >
              First specific
            </option>
            <option
              value="secondSpecific"
              // selected={state.specificSelect === "secondSpecific"}
            >
              Second specific
            </option>
          </Select>
          <AreaForMembers>
            {state.members.map(({ id, name }) => {
              return (
                <Card key={id} onClick={removeMember}>
                  {name}
                  <DeleteMark />
                </Card>
              );
            })}
            <AddCard onClick={addMember} />
          </AreaForMembers>
        </Flex>
        <Flex width="100%" justify="space-between">
          <Button outlined>Add</Button>
          <Button>Send Request</Button>
        </Flex>
        <DashedLine />
        <VotesTitle>Votes</VotesTitle>
        <Flex width="100%" justify="center" margin="0 0 26px 0">
          <Flex
            width="394px"
            justify="space-between"
            onClick={onChangeCategory}
          >
            {votes.map(({ id, category }) => {
              return (
                <Radio
                  key={id}
                  name="category"
                  defaultValue={category}
                  votes={votes}
                >
                  {category}
                </Radio>
              );
            })}
          </Flex>
        </Flex>
        <CheckboxForVoteList>
          {members.map(({ id, name }) => {
            return (
              <CheckboxForVoteItem key={id}>
                <CheckboxForVote
                  name={name}
                  onCheck={onCheck}
                  members={members}
                >
                  {name}
                </CheckboxForVote>
              </CheckboxForVoteItem>
            );
          })}
        </CheckboxForVoteList>
      </FormBody>
    </form>
  );
};
// Form1.propTypes = {
//   onChange: PropTypes.func,
// };

export default Form2;
