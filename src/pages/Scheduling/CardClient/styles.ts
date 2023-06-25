import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 220px;
  background-color: ${({ theme }) => theme.colors.ice};
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin-top: 20px;

  & .spanContainer {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: -20px;
    margin-right: 10px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 94px;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30%;
`;
