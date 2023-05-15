import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.brown};
`
;

export const NavigationLayout = styled.header`
display: inline-block;
margin-top: 20px;
align-items: center;
`

export const ContentContainer = styled.div`
width: 86%;
height: 90%;
display: flex;
justify-content: flex-start;
margin-top:40px;
border-radius: 30px;
background-color: ${({theme}) => theme.colors.black};
`