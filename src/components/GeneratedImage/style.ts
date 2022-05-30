import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 1080px;
  height: 600px;
  border-radius: 10px;
`;

export const Item = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 10px;
  width: 200px;
  height: 432px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const Hint = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;
