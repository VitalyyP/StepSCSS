import styled from "styled-components";

export const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${({ margin }) => margin || "0"};
`;
Flex.displayName = "Flex";

export const MainText = styled.p`
  font-size: 24px;
`;
MainText.displayName = "MainText";
