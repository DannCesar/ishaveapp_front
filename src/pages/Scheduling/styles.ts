import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 1360px;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  & .nextContainer {
    margin-top: 40px;
    
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 420px;
  margin-top: 20px;
  background-color: ${({theme}) => theme.colors.ice};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.modal};
  h4 {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
  }

  & .formClient {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-left: 40px;

    label {
      color: ${({ theme }) => theme.colors.black};
      font-size: 16px;
      font-weight: 600;
    }
    input {
      color: ${({ theme }) => theme.colors.black};
      background-color: #fff;
      
    }
  }

  & .btnContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;


    button {
      color: #fff;
      border-color: ${({theme}) => theme.colors.brown};
    }
  }
`;
