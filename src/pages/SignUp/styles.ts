import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
`;

export const ContentFormContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  `;

export const LogoContainer = styled.div`
width: 50%;
height: 100vh;
background-color: ${({ theme }) => theme.colors.brown};
`;
