import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ContentFormContainer = styled.form`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};

  & .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 180px;
    align-items: center;

    & button {
      padding: 4px;
      align-items: center;
      margin-top: 12px;
    }
  }

  @media (max-width: 1333px) {
    & .contentContainer {
      margin-top: 120px;
    }
  }

  & .txtContainer {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    gap: 8px;

    & h3 {
      font-weight: 200;
      font-size: 20px;
    }
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

    & .spanContainer {
      margin-top: -20px;
      font-size: 12px;
      display: flex;
      justify-content: end;
      color: #fff;
    }
    & button {
      color: #5896b8;
      margin-left: -4px;
      text-decoration: underline;
      border: none;
      background-color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};

  & .logo {
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
    height: 300px;
    box-shadow: 10px 10px 5px ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;
