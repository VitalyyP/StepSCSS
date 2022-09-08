import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  counter-reset: my-counter; /* Задаём имя счетчика */
`;
List.displayName = "List";

export const Step = styled.li`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;

  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:not(:first-child) {
    margin-left: 80px;
    &::after {
      position: absolute;
      left: -56px;
      width: 32px;
      height: 4px;
      background-color: ${({ passed }) => (passed ? "#4ec970" : "#ecf0f5")};
      content: "";
    }
  }

  &::before {
    width: 32px;
    height: 32px;
    margin-right: 9px;
    content: counter(my-counter); /* Выводим число */
    counter-increment: my-counter; /* Увеличиваем значение счётчика */
    background-color: #ecf0f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ primary }) => (primary ? "#424242" : "#ffffff")};
    background-color: ${({ passed }) => (passed ? "#4ec970" : "#ecf0f5")};
  }
`;
Step.displayName = "Step";
