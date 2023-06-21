import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  position: fixed;
  max-width: 30%;
  max-height: 40%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  flex-direction: column;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.modal};

  & .containerInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  & .title{
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    color: #FF0000;
    font-weight: 600;
  }
  & .label{
    font-size: 16;
    display: flex;
    justify-content: center;
    margin-top: 6px;
  }

  & .btnContainer{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
    & button{
      color: #fff;
    }
  }
`;
