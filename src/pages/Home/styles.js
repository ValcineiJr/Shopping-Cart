import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 243px);
  background: #fff;
  padding-bottom: 70px;
`;
export const Carousel = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  position: relative;
  background: blue;

  ul {
    display: flex;
    overflow-x: hidden;
    list-style: none;
  }

  .arrow {
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
  }

  .backArrow {
    left: 0;
  }
  .nextArrow {
    right: 0;
  }

  .carousel {
    min-width: 100vw;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 26px;
  }
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
