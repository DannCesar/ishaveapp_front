import styled from "styled-components";

export const Container = styled.div`
width: 420px;
height: 220px;
background-color: ${({theme}) => theme.colors.ice};
border-radius: 18px;
display: flex;
align-items: center;


& .spanContainer{
   
    display: flex;
    flex-direction: column;
    margin-left: 70px ;
    margin-top: -20px;
}

`;

export const AvatarContainer = styled.div`
 display: flex;
  
  margin-left: 40px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30%;
`