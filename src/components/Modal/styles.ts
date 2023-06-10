import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: black;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 100;
  opacity: 0.5;
`;

export const InfoModal = styled.div`
  position: fixed;
  background-color: #ffff;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
`

