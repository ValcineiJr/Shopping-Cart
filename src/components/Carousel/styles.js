import styled, { css } from "styled-components";
import { ChevronLeft, ChevronRight } from "../../styles/Icons";

const arrowCSS = css`
  display: Flex;
  align-items: center;
  min-width: 50px;
  height: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  position: relative;
  background: var(--light-gray);
  ul {
    display: flex;
    overflow-x: hidden;
    list-style: none;
  }
`;
export const Indicator = styled.div`
  background: ${(props) => props.color};
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  transition: all 0.6s;

  &:nth-child(2) {
    margin: 0 20px;
  }
`;
export const Arrow = styled.div`
  ${arrowCSS};
  &:nth-child(3) {
    right: 0;
  }
`;
export const Item = styled.img`
  min-width: 100vw;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 26px;
  object-fit: cover;
`;
export const Selectors = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  background: transparent;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const arrowIconCSS = css`
  height: 20px;
  width: 20px;

  & {
    path {
      color: #fff;
    }
  }
`;

export const NextArrow = styled(ChevronRight)`
  ${arrowIconCSS}
`;
export const PreviousArrow = styled(ChevronLeft)`
  ${arrowIconCSS}
`;
