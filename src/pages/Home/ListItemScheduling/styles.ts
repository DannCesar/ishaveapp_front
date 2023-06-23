import styled from "styled-components";

export const Container = styled.div`
width: 800px;
height: 400px;
background-color: ${({theme}) => theme.colors.ice};
border-radius: 12px;
padding: 12px;
margin-left: -42px;
margin-top: 10px;

& .list{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    
    
}
`