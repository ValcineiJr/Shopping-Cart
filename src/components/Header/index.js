import React from "react";
import {
  Container,
  Input,
  CartButton,
  Menu,
  MenuItens,
  Left,
  Right,
  FacebookIcon,
  InstagramIcon,
  Image,
  UserIcon,
  WhatsappIcon,
  InputBox,
  SearchIcon,
  Li,
} from "./styles";
import logo from "../../assets/images/logo.png";
import MenuItem from "../../components/MenuItem";
import StickyBox from "react-sticky-box";

const Header = () => {
  return (
    <>
      <Menu>
        <Left>
          <>
            <FacebookIcon />
            <InstagramIcon />
          </>
          <InputBox>
            <Input placeholder="Buscar..." />
            <SearchIcon />
          </InputBox>
        </Left>
        <Right>
          <Image src={logo} />
          <MenuItem firstLine="Acessar" secondLine="minha conta">
            <UserIcon />
          </MenuItem>
          <MenuItem firstLine="Central De" secondLine="atendimento">
            <WhatsappIcon />
          </MenuItem>
          <CartButton />
        </Right>
      </Menu>

      <MenuItens>
        <ul>
          <Li>Roupas</Li>
          <Li>Lingeries</Li>
          <Li>Moletons</Li>
          <Li>Calçados</Li>
          <Li>Casacos</Li>
        </ul>
      </MenuItens>
    </>
  );
};

export default Header;
