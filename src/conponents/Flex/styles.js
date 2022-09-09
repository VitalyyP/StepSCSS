import styled from "styled-components";

export const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${({ margin }) => margin || "0"};
`;
FlexStyled.displayName = "FlexStyled ";
