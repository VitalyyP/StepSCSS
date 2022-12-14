import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 24px 0;
  padding: 0;
  counter-reset: my-counter; /* Задаём имя счетчика */
`;

export const Step = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-transform: capitalize;
  color: #505b67;

  position: relative;
  display: flex;
  align-items: center;

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
    margin-right: 13px;
    content: counter(my-counter); /* Выводим число */
    counter-increment: my-counter; /* Увеличиваем значение счётчика */
    background-color: #ecf0f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: ${({ passed }) => (passed ? "#ffffff" : "#aab4bd")};
    background-color: ${({ passed }) => (passed ? "#4ec970" : "#ecf0f5")};
  }
`;
