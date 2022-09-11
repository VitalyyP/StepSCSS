import React, { useState } from "react";
import PropTypes from "prop-types";

import Flex from "../Flex";
import Select from "../Select";
import Counter from "../Counter";
import Button from "../Button";
import Radio from "../Radio";
import CheckboxForVote from "../CheckboxForVote";
import {
  FormBody,
  TeamTitle,
  Area,
  Card,
  DeleteMark,
  AddCard,
  DashedLine,
  VotesTitle,
  CheckboxForVoteList,
  CheckboxForVoteItem,
} from "./styles";

const Form2 = (props) => {
  const [form, setForm] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });
    props.onCloseModalForm();
  };

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onCheck = (e) => {
    console.log(e.target.checked);
    const { name } = e.target;

    setForm({
      ...form,
      [name]: e.target.checked,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormBody>
        <TeamTitle>Team</TeamTitle>
        <Flex width="100%" justify="space-between" margin="0 0 16px 0">
          <Select width="200px" name="designs" id="design-select">
            <option value="">Design</option>
            <option value="dog">Another design</option>
          </Select>

          <Counter></Counter>
          <Select width="240px" name="members" id="member-select">
            <option value="">Who to send the request to</option>
            <option value="dog">Who else to send the request to</option>
          </Select>
        </Flex>
        <Flex
          width="100%"
          justify="space-between"
          margin="0 0 24px 0"
          align="start"
        >
          <Select width="200px" name="specifics" id="specific-select">
            <option value="">Specific</option>
            <option value="dog">Another specific</option>
          </Select>
          <Area>
            <Card>
              Kathryn Murphy
              <DeleteMark />
            </Card>
            <Card>
              Darrell Steward
              <DeleteMark />
            </Card>
            <Card>
              Darlene Robertson
              <DeleteMark />
            </Card>
            <AddCard />
          </Area>
        </Flex>
        <Flex width="100%" justify="space-between">
          <Button simple>Add</Button>
          <Button>Send Request</Button>
        </Flex>
        <DashedLine />
        <VotesTitle>Votes</VotesTitle>
        <Flex width="100%" justify="center" margin="0 0 26px 0">
          <Flex width="394px" justify="space-between">
            <Radio name="category">All votes</Radio>
            <Radio name="category">Majority</Radio>
            <Radio name="category">Veto</Radio>
          </Flex>
        </Flex>
        <CheckboxForVoteList>
          <CheckboxForVoteItem>
            <CheckboxForVote id="id0" onCheck={onCheck} form={form}>
              Kathryn Murphy
            </CheckboxForVote>
          </CheckboxForVoteItem>
          <CheckboxForVoteItem>
            <CheckboxForVote id="id1" onCheck={onCheck} form={form}>
              Darrell Steward
            </CheckboxForVote>
          </CheckboxForVoteItem>
          <CheckboxForVoteItem>
            <CheckboxForVote id="id2" onCheck={onCheck} form={form}>
              Darlene Robertson
            </CheckboxForVote>
          </CheckboxForVoteItem>
        </CheckboxForVoteList>
      </FormBody>
    </form>
  );
};
// Form1.propTypes = {
//   onChange: PropTypes.func,
// };

export default Form2;
