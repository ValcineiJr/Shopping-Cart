import styled, { css } from "styled-components";
import { Add, Remove } from "../../styles/Icons";

const iconCSS = css`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  border: 1px solid #ddd;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

export const RemoveButton = styled(Remove)`
  ${iconCSS}
  fill: var(--like);
  &:hover,
  &:active {
    fill: var(--like-hover);
  }
`;
export const Value = styled.span`
  font-size: 18px;
`;
export const AddButton = styled(Add)`
  ${iconCSS}
  fill: var(--button);
  &:hover,
  &:active {
    fill: var(--button-hover);
  }
`;
