import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  position: fixed;
  max-width: 30%;
  max-height: 40%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  flex-direction: column;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.modal};

  & .inputDate {
    display: flex;
    border-radius: 8px;
    padding: 6px 8px;
    border: none;
    margin-top: 20px;
  }

  & .spanContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-weight: 400;
  }

  @media (max-width: 1333px) {
    max-width: 50%;
    max-height: 70%;
  }

  h4 {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
  }

  & .formClient {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    gap: 12px;

    select {
      display: flex;
      margin-top: 20px;
      padding: 4px 8px;
      width: 170px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.ice};
    }

    label {
      color: ${({ theme }) => theme.colors.black};
      font-size: 16px;
      font-weight: 600;
    }
    input {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.ice};
    }
  }

  & .btnContainer {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    gap: 28px;

    button {
      color: #fff;
      border-color: ${({ theme }) => theme.colors.brown};
    }
  }
`;
