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

  @media (max-width: 1333px) {
    width: 500px;
    margin-top: 130px;
    margin-left: 400px;
    height: 400px;
  }

  & .spanContainer {
    display: flex;
    color: #fff;
    justify-content: flex-start;
    margin-left: -1050px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 1220px;
  justify-content: space-between;
  margin-top: -600px;
  margin-left: -50px;

  @media (max-width: 1333px) {
    width: 1050px;
    margin-left: -220px;
    margin-top: -580px;
  }
  & .searchContainer {
    display: flex;
    align-items: center;
    gap: 12px;
    & select {
      width: 130px;
      padding: 4px 8px;
      border-radius: 12px;
    }

    & span {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 1220px;
`;
