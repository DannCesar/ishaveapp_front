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

  @media (max-width:1333px){
    width: 500px;
    margin-top: 130px;
    margin-left: 400px;
    height: 400px;
  }
`;

export const Header = styled.div`
display: flex ;
align-items: center;
position: fixed;
width: 1220px;
justify-content: space-between;
margin-top: -600px;
margin-left: -50px;

@media (max-width: 1333px){
  width: 1050px;
  margin-left: -220px;
  margin-top: -580px;
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
    color: #fff;
  }
}



`;

export const Content = styled.div`
display: flex;
width: 1250px;
background-color: aliceblue;

@media (max-width:1333px){
  height
}

& .spanContainer{
  display: flex;
  color: ${({theme}) => theme.colors.black};
  width: 220px;
  height: 60px;
  margin-top: 12px;
  text-align: center;
}

& .schedulingContainer{
  display: flex;
  background-color: ${({theme}) => theme.colors.ice};
  border-radius: 12px;
  flex-direction: column;
  width: 1200px;
  margin-bottom: 380px;
  margin-left: 980px;
  margin-right: 40px;
}

@media (max-width:1333px){
  & .schedulingContainer{
    margin-top: 46px;
    margin-left: 800px;
    margin-right: 210px;
  }
}

& .datePicker{
  margin-left: 26px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 4px 8px;
  display: flex;
  
}

`;