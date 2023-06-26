import styled from "styled-components";

export const Container = styled.div`
width: 800px;
height: 50px;
background-color: ${({theme}) => theme.colors.ice};
border-radius: 12px;
padding: 12px;
margin-top: 10px;
align-items: center;

& .list{
    width: 800px;
    height: fit-content;
    margin-top: 10px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
}
`