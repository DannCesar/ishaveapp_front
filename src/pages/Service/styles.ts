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
`;

export const Header = styled.div`
display: flex ;
align-items: center;
position: fixed;
width: 1220px;
justify-content: space-between;
margin-top: -600px;
margin-left: -50px;

& .searchContainer{
  display: flex;
  gap: 4px;
}

`;

export const Content = styled.div`
display: flex;
width: 1220px;

`;