import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100px;
  margin: 40px 0;
  width: 100%;
  background: transparent;

  justify-content: center;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 10px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 0 15px;
      border-right: 1px solid var(--light-gray);

      .title {
        color: #333;
        font-size: 14px;
        font-weight: bold;
      }
      .subTitle {
        font-size: 14px;
        color: #888;
      }
    }
  }
`;
