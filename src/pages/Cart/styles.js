import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  background: var(--white);
  margin: 0 auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const ShowTotal = styled.div`
  margin: 20px 50px 0 auto;
  padding-bottom: 20px;
  font-size: 26px;
  color: #333;
  border-bottom: 1px solid #ddd;
`;
export const Checkout = styled.a`
  margin: 20px 50px 20px auto;
  font-size: 20px;
  background: var(--button);
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  color: #fff;

  &:hover {
    background: var(--button-hover);
  }
`;
export const BackButton = styled(Link)`
  text-align: center;
  margin: 10px 0;
  font-size: 18px;
  color: var(--button);

  &:hover {
    color: var(--button-hover);
  }
`;
export const Message = styled.span`
  text-align: center;
  margin: 10px 0;
  font-size: 20px;
`;
export const Back = styled(Link)`
  margin: 20px;
  font-size: 18px;
  color: var(--button);

  &:hover {
    color: var(--button-hover);
  }
`;
