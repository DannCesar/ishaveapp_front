import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  & .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;
    align-items: center;
  }
  @media (max-width: 1333px) {
    & .contentContainer {
      margin-top: 40px;
    }
  }

  & .txtContainer {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    gap: 8px;
  }
`;

export const InfoFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};

  & .inputContainer {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-right: 110px;
    margin-left: 110px;

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
  }

  @media (max-width: 1333px) {
    & .inputContainer {
      margin-left: 50px;
      margin-top: 50px;
      & input {
        width: 230px;
      }
    }
  }

  & .btnContainer {
    display: flex;
    height: 40px;
    gap: 50px;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    border: none;

  }

  @media (max-width: 1333px) {
    & .btnContainer {
      margin-top: 80px;
    }
  }
`;

export const FormContainer = styled.form`
  & .infoContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1333px) {
      width: 600px;
    }
  }
`;
