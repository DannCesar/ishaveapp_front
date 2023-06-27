import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({theme}) => theme.colors.black};
`;

export const InfoContainer = styled.div`
width: 50%;
background-color: ${({theme}) => theme.colors.black};
color: #fff;
display: flex;
justify-content: center;
margin-top: 300px;

& .btnContainer{
    display: flex;
    margin-top: 20px;
}
`;

export const LogoContainer = styled.div`
width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};

  & .logoContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 15%;
    width: 600px;
    height: 500px;
  }

  & img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

`
