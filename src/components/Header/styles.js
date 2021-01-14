import styled, { css } from "styled-components";
import {
  ShoppingCart,
  FacebookF,
  InstagramSquare,
  User,
  Whatsapp,
  Search,
} from "../../styles/Icons";

const iconCSS = css`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  margin: 5px;
  color: var(--gray);
  cursor: pointer;
`;

export const CartButton = styled(ShoppingCart)`
  ${iconCSS};
`;
export const Menu = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  background: var(--menu);
`;
export const MenuItens = styled.div`
  z-index: 1;
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  height: 93px;
  width: 100%;
  background: var(--white);
  position: sticky;
  top: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const Left = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;
export const FacebookIcon = styled(FacebookF)`
  ${iconCSS};
`;
export const InstagramIcon = styled(InstagramSquare)`
  ${iconCSS};
`;
export const UserIcon = styled(User)`
  ${iconCSS};
`;
export const WhatsappIcon = styled(Whatsapp)`
  ${iconCSS};
`;
export const SearchIcon = styled(Search)`
  ${iconCSS};
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 5px;
`;
export const Image = styled.img`
  width: 150px;
`;
export const InputBox = styled.div`
  height: 50px;
  width: 100%;
  max-width: 300px;
  position: relative;
  margin-left: 50px;
`;
export const Input = styled.input`
  background: var(--white);
  height: 100%;
  width: 100%;
  font-size: 18px;
  outline: 0;
  padding-left: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 30px;
`;
export const Li = styled.li`
  /* padding: 5px; */
  padding-right: 20px;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  border-right: 1px solid var(--gray);
`;
