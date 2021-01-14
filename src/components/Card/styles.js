import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  /* justify-content: space-around; */

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.p`
  font-size: 17px;
`;
export const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
export const Desc = styled.span`
  font-size: 16px;
  color: #333;
`;
export const Buy = styled.div`
  margin-top: auto;
`;
export const AddButton = styled.div`
  padding: 10px;

  margin: 5px 0;
`;
export const Button = styled(Link)`
  text-decoration: none;
  &:active {
    cursor: grabbing;
  }
  cursor: pointer !important;
  pointer-events: none;
`;
