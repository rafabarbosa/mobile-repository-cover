import styled from "styled-components";

export const Container = styled.div``;

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;

  width: 1080px;
  height: 120px;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #ddd;
`;
