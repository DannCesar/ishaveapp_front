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
  

  & .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;
    align-items: center;

    & button {
      padding: 4px;
      align-items: center;
      margin-top: 12px;
    }
  }

  @media (max-width:1333px){
    & .contentContainer{
      margin-top: 120px
    }
  }

  & .txtContainer {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    gap: 8px;
    
  }

  & .inputContainer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    & input {
      width: 300px;
      height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      border: none;
      background-color: ${({ theme }) => theme.colors.ice};
    }
    & h4 {
      color: #fff;
      
    }

    & .spanContainer{
      margin-top: -8px;
      font-size: 12px;
      display: flex;
      justify-content: end;
      color: #fff;
    }
    & a {
      color: #5896B8;
      margin: none;
      text-decoration: none;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};
`;
