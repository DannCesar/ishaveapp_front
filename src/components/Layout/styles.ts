import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brown};
`;

export const NavigationLayout = styled.header`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;

export const Sidebar = styled.div`
  position: fixed;
  height: 100vh;
  width: 223px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aliceblue; */

  & .nameUserContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 200px;
    margin-left: 40px;
    align-items: center;

    > h3 {
      font-family: Roboto, sans-serif;
      font-size: 16px;
    }
  }

  & .signOutContainer {
    margin-top: 350px;
  }
`;
export const AvatarContainer = styled.div`
  display: flex;
  margin-top: 86px;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30%;
`;

export const ContentContainer = styled.div`
  width: 86%;
  height: 90%;
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.black};

  & .baseLeftContainer {
    background-color: ${({ theme }) => theme.colors.black};
    margin-top: 495px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
  }
`;
