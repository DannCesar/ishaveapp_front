import styled from "styled-components";
import { InfoModal } from "../../components/Modal/styles";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${({theme}) => theme.colors.black};
   
`;

export const ConfirmEmailModal = styled(InfoModal)`
  text-align: center;
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  border-radius: ${({theme}) => theme.borderRadius.modal};


  & .infoModal{
    & h3{
        font-weight: 200;
    }
    
  }
  & .btnContainer{
    margin-top: 20px;
    
    & button{
        color: #fff;
    }
    
  }
 
`