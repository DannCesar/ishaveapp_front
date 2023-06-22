import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  position: fixed;
  max-width: 40%;
  max-height: 45%;
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

  @media (max-width:1333px){
    max-width: 50%;
    max-height: 55%;
  }
  h4 {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
  }

  & .formClient {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-left: 50px;

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
    margin-top: 30px;
    gap: 28px;

    button {
      color: #fff;
      border-color: ${({ theme }) => theme.colors.brown};
    }
  }
`;
