import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`;

export const ContentFormContainer= styled.div`
width: 50%;
height: 100vh;
background-color: ${({theme}) => theme.colors.black};

& .contentContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;


    & button{
        padding:4px;
    }
}

& .txtContainer{
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    gap: 8px;
}
`;

export const LogoContainer = styled.div`
width: 50%;
height: 100vh;
background-color: ${({theme}) => theme.colors.brown};
`;