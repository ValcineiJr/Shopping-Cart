import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.h2`
  margin-left: 10px;
  font-weight: normal;
  font-size: 22px;
`;
export const Itens = styled.div`
  width: 100%;
  display: flex;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  ul {
    display: flex;
    list-style: none;
  }
  overflow-x: scroll;
`;
