import styled from "styled-components";

export const Container = styled.div`
width: 800px;
height: 400px;
background-color: ${({theme}) => theme.colors.ice};
border-radius: 12px;
padding: 12px;
margin-left: -14px;
margin-top: 10px;

@media (max-width:1333px){
    height: 330px;
}



& .list{
    margin-top: 10px;
    margin-left: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-decoration: underline;
    
}
`