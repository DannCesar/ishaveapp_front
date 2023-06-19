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
  gap: 50px;
  margin-top: 20px;
  margin-left: 20px;
  align-items: center;

  @media (max-width:1690px){
    max-width: 1140px;
    gap: 160px;
  }
  @media (max-width:1333px){
    max-width: 1300px;
    gap: 100px;
  }

  & .navigation{
    display: flex;
    gap:10px;
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    position: relative;
    align-items: center;
    cursor: pointer;
  }


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
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      
    }
  }

  @media (max-width:1690px){
    & .nameUserContainer{
        margin-left: 0px;
    }
  }
  @media (max-width:1333px){
    & .nameUserContainer{
        margin-left: 50px;
    }
  }
 

  & .signOutContainer {
    margin-top: 350px;
    cursor: pointer;
  }

  @media(max-width: 1690px){
    & .signOutContainer{
        margin-top: 500px;
    }
  }
  @media(max-width: 1333px){
    & .signOutContainer{
        margin-top: 350px;
        margin-left: 42px;
    }
  }
`;
export const AvatarContainer = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30%;
  

  @media(max-width:1690px){
    margin-left: 0px;
  }
  @media(max-width:1333px){
    margin-left: 50px;
  }
`;

export const ContentContainer = styled.div`
  width: 86%;
  height: 93%;
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
  border-radius: 30px 30px 30px 0px;
  background-color: ${({ theme }) => theme.colors.black};

 
`;
