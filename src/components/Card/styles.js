import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 300px;
  min-height: 400px;
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
  font-size: 20px;
  font-weight: bold;
`;
export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: contain;
`;
export const Price = styled.span`
  font-size: 24px;
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
export const TextLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  border-radius: 4px;
  padding: 10px;
  background: var(--button);
`;
