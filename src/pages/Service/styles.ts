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

  & .serviceContainer{
    margin-top: 50px;
    display: grid;
    width: 800px;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.2fr;
    margin-left: -422px;
    span{
      color: #fff;
    }
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
`;
