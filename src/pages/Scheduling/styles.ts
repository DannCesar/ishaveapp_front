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

  & .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 30%;
    height: 30%;
    margin-top: 10px;
    flex-direction: column;
    margin-right: 20px;
    gap: 20px;
  }

  & .btnContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
  }
  @media (max-width: 1333px) {
    width: 500px;
    margin-top: 130px;
    margin-left: 400px;
    height: 400px;
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
  flex-direction: column;
  width: 900px;
  height: 500px;
  margin-top: 10px;
  margin-left: -350px;
  overflow-y: scroll;

  & .datePicker {
    margin-left: 26px;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 4px 8px;
    display: flex;
  }

  & .notFoundContainer{
    color: #fff;
  }
`;
