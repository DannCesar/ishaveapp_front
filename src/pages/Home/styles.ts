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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: -422px;
    span{
      color: #fff;
    }
  }

  @media (max-width: 1333px){
    margin-top: 90px;
    height: 400px;
  }

  & .spanContainer{
    display: flex;
    color: #fff;
    justify-content: flex-start;
    margin-left: -1010px;
  }

  @media (max-width:1333px){
    & .spanContainer{
      margin-left: -1080px;
    }
  }
`;


export const Header = styled.div`
display: flex ;
align-items: center;
position: fixed;
width: 1220px;
justify-content: end;
margin-top: -600px;
margin-left: -50px;

@media (max-width: 1333px){
  width: 1040px;
  margin-top: -500px;
  margin-left: -280px;
 
}


& .searchContainer{
  display: flex;
  align-items: center;
  gap: 12px;

  & select{
    width: 130px;
    padding: 4px 8px;
    border-radius: 12px;

  
  }

  & span{
    margin-left: 200px;
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