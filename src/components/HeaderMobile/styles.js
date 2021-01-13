import styled, { css } from "styled-components";
import { ShoppingCart, Bars, User } from "../../styles/Icons";

const iconCSS = css`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  margin: 5px;
  color: var(--gray);
  cursor: pointer;
`;

export const Container = styled.div`
  display: none;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: flex;
  }
`;
export const Header = styled.div`
  display: flex;
  height: 60px;
  background: var(--menu);
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  width: 100%;
`;
export const MenuBox = styled.div`
  display: ${(props) => props.display};
  background: var(--white);
  justify-content: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 150px;
`;

export const UserIcon = styled(User)`
  ${iconCSS};
  margin-right: 15px;
`;

export const CartIcon = styled(ShoppingCart)`
  ${iconCSS};
`;

export const MenuIcon = styled(Bars)`
  ${iconCSS};
`;
export const Li = styled.li`
  padding: 8px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  color: var(--gray);

  &:last-child {
    border: none;
  }

  border-bottom: 1px solid #ddd;
`;
