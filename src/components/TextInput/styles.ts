import styled from "styled-components";

export const Container = styled.div`
display: flex;

& label {
    font-family: 'Roboto',sans-serif;
    margin-bottom: 4px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
}
& .inputContainer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    

    & input {
      width: 300px;
      height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      border: none;
      background-color: ${({ theme }) => theme.colors.ice};
    }}
`