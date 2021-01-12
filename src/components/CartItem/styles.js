import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  height: 150px;
  border-bottom: 1px solid #ddd;
`;
export const Image = styled.img`
  object-fit: contain;
  width: 200px;
  height: 100%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  max-width: 500px;
  background: #fff;
`;
export const Desc = styled.span`
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Title = styled.span`
  font-size: 22px;
  color: #333;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PriceBox = styled.div`
  display: flex;
  width: 140px;
  background: #fff;
  flex-direction: column;
  margin-left: auto;
  margin-right: 50px;
`;
export const RemoveButton = styled.a`
  margin-top: 8px;
  display: inline-block;
  cursor: pointer;
  color: var(--like);
  transition: all 0.4s;

  &:hover {
    color: var(--like-hover);
  }
`;
export const Quantity = styled.span`
  color: #333;
  font-size: 16px;
`;
export const Price = styled.span`
  color: #333;
  font-size: 26px;
`;
export const QuantityBox = styled.div`
  display: flex;
`;
