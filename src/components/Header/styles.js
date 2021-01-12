import styled from "styled-components";
import { ShoppingCart } from "../../styles/Icons";

export const Container = styled.div`
  background: var(--menu);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;
export const Input = styled.input`
  background: var(--white);
  height: 40px;
  width: 100%;
  max-width: 300px;
  outline: 0;
  padding-left: 8px;
`;
export const CartButton = styled(ShoppingCart)`
  cursor: pointer;
  margin-left: 20px;
`;
